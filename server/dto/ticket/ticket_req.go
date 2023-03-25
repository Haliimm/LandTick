package ticketdto

type TicketRequest struct {
	NameTrain            string `json:"name_train" gorm:"type: varchar(255)"`
	TypeTrain            string `json:"type_train" gorm:"type: varchar(255)"`
	StartDate            string `json:"start_date" gorm:"type: varchar(255)"`
	StartStationID       int    `json:"start_station_id,omitempty" form:"start_station_id" gorm:"type: int"`
	StartTime            string `json:"start_time" gorm:"type: varchar(255)"`
	DestinationStationID int    `json:"destination_station_id,omitempty" form:"destination_station_id" gorm:"type: int"`
	ArrivalTime          string `json:"arrival_time" gorm:"type: varchar(255)"`
	Price                int    `json:"price,omitempty" form:"price" gorm:"type: int"`
	Qty                  int    `json:"qty,omitempty" form:"qty" gorm:"type: int"`
}

type FilterRequest struct {
	StartDate            string `json:"start_date" form:"start_date"`
	StartStationID       int    `json:"start_station_id" form:"start_station_id" gorm:"type: int"`
	DestinationStationID int    `json:"destination_station_id" form:"destination_station_id" gorm:"type: int"`
}

type TransTicket struct {
	Qty int `json:"qty" form:"qty" gorm:"type: int"`
}
