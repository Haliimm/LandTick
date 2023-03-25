package models

import "time"

type Ticket struct {
	ID                   int             `json:"id" gorm:"primary_key:auto_increment"`
	NameTrain            string          `json:"name_train" gorm:"type: varchar(255)"`
	TypeTrain            string          `json:"type_train" gorm:"type: varchar(255)"`
	StartStationID       int             `json:"start_station_id,omitempty" form:"start_station_id" gorm:"type: int"`
	StartStation         StationResponse `json:"star_tstation"`
	StartDate            string          `json:"start_date" gorm:"type: varchar(255)"`
	StartTime            string          `json:"start_time" gorm:"type: varchar(255)"`
	ArrivalTime          string          `json:"arrival_time" gorm:"type: varchar(255)"`
	DestinationStation   StationResponse `json:"destination_station"`
	DestinationStationID int             `json:"destination_station_id,omitempty" form:"destination_station_id" gorm:"type: int"`
	Price                int             `json:"price" form:"price" gorm:"type: int"`
	Qty                  int             `json:"qty" form:"qty" gorm:"type: int"`
	UserID               int             `json:"user_id"`
	// User                 UserResponse    `json:"user"`
	CreatedAt time.Time `json:"-"`
	UpdatedAt time.Time `json:"-"`
}

type TicketResponse struct {
	ID                   int             `json:"id" gorm:"primary_key:auto_increment"`
	NameTrain            string          `json:"name_train" gorm:"type: varchar(255)"`
	TypeTrain            string          `json:"type_train" gorm:"type: varchar(255)"`
	StartStation         StationResponse `json:"start_station" gorm:"type: varchar(255)"`
	StartStationID       int             `json:"start_station_id,omitempty" gorm:"type: int"`
	StartDate            string          `json:"start_date" gorm:"type: varchar(255)"`
	StartTime            string          `json:"start_time" gorm:"type: varchar(255)"`
	ArrivalTime          string          `json:"arrival_time" gorm:"type: varchar(255)"`
	DestinationStation   StationResponse `json:"destination_station"`
	DestinationStationID int             `json:"destination_station_id,omitempty" gorm:"type: int"`
	Price                int             `json:"price,omitempty" gorm:"type: int"`
	Qty                  int             `json:"qty,omitempty" gorm:"type: int"`
	UserID               int             `json:"user_id"`
	// User                 UserResponse    `json:"user"`
}

type TicketUserResponse struct {
	ID        int    `json:"id" gorm:"primary_key:auto_increment"`
	Fullname  string `json:"fullname" gorm:"type: varchar(255)"`
	StationID int    `json:"station_id" gorm:"type: varchar(255)"`
	Price     int    `json:"price" gorm:"type: varchar(255)"`
	Qty       int    `json:"qty" gorm:"type: varchar(255)"`
}

func (Ticket) TableName() string {
	return "ticket"
}

func (TicketResponse) TableName() string {
	return "ticket"
}

func (TicketUserResponse) TableName() string {
	return "ticket"
}
