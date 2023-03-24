package routes

import (
	"landtick/handlers"
	"landtick/pkg/middleware"
	"landtick/pkg/mysql"
	"landtick/repositories"

	"github.com/labstack/echo/v4"
)

func TicketRoutes(e *echo.Group) {
	TicketRepository := repositories.RepositoryTicket(mysql.DB)
	h := handlers.HandlerTicket(TicketRepository)

	e.GET("/tickets", h.FindTicket)
	e.GET("/ticket/:id", h.GetTicket)
	e.POST("/ticket", middleware.Auth(h.AddTicket))

	e.GET("/filter", h.FindFilter)
	e.POST("/transaction-qty/:id", middleware.Auth(h.CreateTransactionQtyTicket))
}
