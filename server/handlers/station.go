package handlers

import (
	dto "landtick/dto/result"
	stationdto "landtick/dto/station"
	"landtick/models"
	"landtick/repositories"
	"net/http"
	"strconv"

	"github.com/labstack/echo/v4"
)

type handlerStation struct {
	StationRepository repositories.StationRepository
}

func HandlerStation(stationRepository repositories.StationRepository) *handlerStation {
	return &handlerStation{stationRepository}
}

func (h *handlerStation) FindStations(c echo.Context) error {
	station, err := h.StationRepository.FindStations()
	if err != nil {
		return c.JSON(http.StatusInternalServerError, dto.ErrorResult{Status: http.StatusBadRequest, Message: err.Error()})
	}
		return c.JSON(http.StatusOK, dto.SuccessResult{Status: http.StatusOK, Message: "Data for all stations was successfully obtained", Data: station})
}

func (h *handlerStation) GetStationById(c echo.Context) error {
	id, _ := strconv.Atoi(c.Param("id"))

	var station models.Station
	station, err := h.StationRepository.GetStationById(id)
	if err != nil {
		return c.JSON(http.StatusInternalServerError, dto.ErrorResult{Status: http.StatusBadRequest, Message: err.Error()})
	}

	return c.JSON(http.StatusOK, dto.SuccessResult{Status: http.StatusOK, Message: "Station data successfully obtained", Data: station})
}

func (h *handlerStation) CreateStation(c echo.Context) error {
	request := new(stationdto.StationRequest)
	if err := c.Bind(request); err != nil {
		return c.JSON(http.StatusBadRequest, dto.ErrorResult{Status: http.StatusBadRequest, Message: err.Error()})
	}

	Field := models.Station{
		Kota: request.Kota,
		Name: request.Name,
	}

	station, err := h.StationRepository.CreateStation(Field)
	if err != nil {
		return c.JSON(http.StatusInternalServerError, dto.ErrorResult{Status: http.StatusBadRequest, Message: err.Error()})
	}

	return c.JSON(http.StatusOK, dto.SuccessResult{Status: http.StatusOK, Message: "Station data successfully obtained", Data: station})
}
