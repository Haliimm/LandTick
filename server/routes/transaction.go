package routes

import (
	"landtick/handlers"
	"landtick/pkg/middleware"
	"landtick/pkg/mysql"
	"landtick/repositories"

	"github.com/labstack/echo/v4"
)

func TransactionRoutes(e *echo.Group) {
	transactionRepository := repositories.RepositoryTransaction(mysql.DB)
	UserRepository := repositories.RepositoryUser(mysql.DB)
	h := handlers.HandlerTransaction(transactionRepository, UserRepository)

	e.GET("/transactions", h.FindTransaction)
	e.POST("/create-trans/:id", middleware.Auth(h.CreateTransaction))
	e.DELETE("/transaction/:id", h.DeleteTransaction)
	e.GET("/order-user", middleware.Auth(h.GetTransByUser))
	e.GET("/get-idpayment/:id", middleware.Auth(h.GetIdPayment))
	e.GET("/payments/:id", middleware.Auth(h.PaymentTransaction))
	e.POST("/notification", h.Notification)
}
