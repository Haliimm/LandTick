package handlers

import (
	dto "landtick/dto/result"
	ticketdto "landtick/dto/ticket"
	"landtick/models"
	"landtick/repositories"
	"strconv"
	"time"

	"net/http"

	"github.com/go-playground/validator/v10"
	"github.com/golang-jwt/jwt/v4"
	"github.com/labstack/echo/v4"
)

type handlerTicket struct {
	TicketRepository repositories.TicketRepository
}

func HandlerTicket(ticketRepository repositories.TicketRepository) *handlerTicket {
	return &handlerTicket{ticketRepository}
}

func (h *handlerTicket) FindTicket(c echo.Context) error {

	tickets, err := h.TicketRepository.FindTicket()
	if err != nil {
		return c.JSON(http.StatusBadRequest, dto.ErrorResult{Status: http.StatusBadRequest, Message: err.Error()})
	}

	return c.JSON(http.StatusOK, dto.SuccessResult{Status: http.StatusOK, Message: "Profile data successfully obtained", Data: tickets})
}

func (h *handlerTicket) GetTicket(c echo.Context) error {
	
	id, _ := strconv.Atoi(c.Param("id"))
	ticket, err := h.TicketRepository.GetTicket(id)
	if err != nil {
		return c.JSON(http.StatusBadRequest, dto.ErrorResult{Status: http.StatusBadRequest, Message: err.Error()})
	}

	return c.JSON(http.StatusOK, dto.SuccessResult{Status: http.StatusOK, Message: "Profile data created successfully", Data: ticket})
}

func (h *handlerTicket) AddTicket(c echo.Context) error {
	userLogin := c.Get("userLogin")
	userId := userLogin.(jwt.MapClaims)["id"].(float64)

	request := new(ticketdto.TicketRequest)
	if err := c.Bind(request); err != nil {
		return c.JSON(http.StatusBadRequest, dto.ErrorResult{Status: http.StatusBadRequest, Message: err.Error()})
	}

	validation := validator.New()
	err := validation.Struct(request)
	if err != nil {
		return c.JSON(http.StatusInternalServerError, dto.ErrorResult{Status: http.StatusInternalServerError, Message: err.Error()})
	}

	Field := models.Ticket{
		NameTrain:            request.NameTrain,
		TypeTrain:            request.TypeTrain,
		StartStationID:       request.StartStationID,
		StartDate:            request.StartDate,
		StartTime:            request.StartTime,
		ArrivalTime:          request.ArrivalTime,
		DestinationStationID: request.DestinationStationID,
		Price:                request.Price,
		Qty:                  request.Qty,
		UserID:               int(userId),
	}

	newTicket, err := h.TicketRepository.AddTicket(Field)
	if err != nil {
		return c.JSON(http.StatusInternalServerError, dto.ErrorResult{Status: http.StatusInternalServerError, Message: err.Error()})
	}

	TicketResponse := models.TicketResponse{
		NameTrain:            newTicket.NameTrain,
		TypeTrain:            newTicket.TypeTrain,
		StartStationID:       newTicket.StartStationID,
		StartStation:         newTicket.StartStation, //masih belum ke get
		StartDate:            newTicket.StartDate,
		StartTime:            newTicket.StartTime,
		ArrivalTime:          newTicket.ArrivalTime,
		DestinationStationID: newTicket.DestinationStationID,
		DestinationStation:   newTicket.DestinationStation, //masih belum ke get
		Price:                newTicket.Price,
		Qty:                  newTicket.Qty,
		UserID:               newTicket.UserID,
		// User:                 newTicket.User,
	}

	return c.JSON(http.StatusOK, dto.SuccessResult{Status: http.StatusOK, Message: "Profile data updated successfully", Data: TicketResponse})
}

func (h *handlerTicket) FindFilter(c echo.Context) error {
	request := new(ticketdto.FilterRequest)
	if err := c.Bind(request); err != nil {
		return c.JSON(http.StatusBadRequest, dto.ErrorResult{Status: http.StatusBadRequest, Message: err.Error()})
	}

	start, err := h.TicketRepository.FilterStation(request.StartStationID)
	if err != nil {
		return c.JSON(http.StatusBadRequest, dto.ErrorResult{Status: http.StatusBadRequest, Message: err.Error()})
	}

	destination, err := h.TicketRepository.FilterStation(request.DestinationStationID)
	if err != nil {
		return c.JSON(http.StatusBadRequest, dto.ErrorResult{Status: http.StatusBadRequest, Message: err.Error()})
	}

	ticket, err := h.TicketRepository.FilterTicket(start.ID, destination.ID, request.StartDate)
	if err != nil {
		return c.JSON(http.StatusBadRequest, dto.ErrorResult{Status: http.StatusBadRequest, Message: err.Error()})
	}

	return c.JSON(http.StatusOK, dto.SuccessResult{Status: http.StatusOK, Message: "Profile data deleted successfully", Data: ticket})
}

func (h *handlerTicket) CreateTransactionQtyTicket(c echo.Context) error {
	request := new(ticketdto.TransTicket)
	if err := c.Bind(request); err != nil {
		return c.JSON(http.StatusBadRequest, dto.ErrorResult{Status: http.StatusBadRequest, Message: err.Error()})
	}

	validation := validator.New()
	err := validation.Struct(request)
	if err != nil {
		return c.JSON(http.StatusBadRequest, dto.ErrorResult{Status: http.StatusBadRequest, Message: err.Error()})
	}

	userLogin := c.Get("userLogin")
	userId := userLogin.(jwt.MapClaims)["id"].(float64)

	id, _ := strconv.Atoi(c.Param("id"))
	tiket, err := h.TicketRepository.GetTicket(id)
	if err != nil {
		return c.JSON(http.StatusBadRequest, dto.ErrorResult{Status: http.StatusBadRequest, Message: err.Error()})
	}

	AllTotal := tiket.Price * request.Qty
	transID := int(time.Now().Unix())
	
	requestTransactionTicket := models.Transaction{
		ID:       transID,
		TicketID: tiket.ID,
		UserID:   int(userId),
		Total:    AllTotal,
		Qty:      request.Qty,
		Status:   "pending",
	}	

	MyTicketQty, err := h.TicketRepository.CreateTransactionQty(requestTransactionTicket)
	if err != nil {
		return c.JSON(http.StatusInternalServerError, dto.ErrorResult{Status: http.StatusInternalServerError, Message: err.Error()})
	}

	return c.JSON(http.StatusOK, dto.SuccessResult{Status: http.StatusOK, Message: "Transaction data created successfully", Data: MyTicketQty})
}

