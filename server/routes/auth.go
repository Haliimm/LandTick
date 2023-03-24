package routes

import (
	"landtick/handlers"
	"landtick/pkg/middleware"
	"landtick/pkg/mysql"
	"landtick/repositories"

	"github.com/labstack/echo/v4"
)

func AuthRoutes(e *echo.Group) {
	userRepository := repositories.RepositoryAuth(mysql.DB)
	h := handlers.HandlerAuth(userRepository)

	e.POST("/register", h.Register)
	e.POST("/login", h.Login)
	e.GET("/check-auth", middleware.Auth(h.CheckAuth))
}
