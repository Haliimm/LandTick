package routes

import (
	"landtick/handlers"
	"landtick/pkg/mysql"
	"landtick/repositories"

	"github.com/labstack/echo/v4"
)

func StationRoutes(e *echo.Group) {
	StationRepository := repositories.RepositoryStation(mysql.DB)
	h := handlers.HandlerStation(StationRepository)

	e.GET("/stations", h.FindStations)
	e.GET("/station/:id", h.GetStationById)
	e.POST("/station", h.CreateStation)
}
