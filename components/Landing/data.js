export const flightsData = {
    "meta": {
        "count": 10,
        "links": {
            "self": "https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=YUL&destinationLocationCode=AMD&departureDate=2022-06-04&adults=1&max=10"
        }
    },
    "data": [
        {
            "type": "flight-offer",
            "id": "1",
            "source": "GDS",
            "instantTicketingRequired": false,
            "nonHomogeneous": false,
            "oneWay": false,
            "lastTicketingDate": "2022-06-04",
            "numberOfBookableSeats": 9,
            "itineraries": [
                {
                    "duration": "PT25H50M",
                    "segments": [
                        {
                            "departure": {
                                "iataCode": "YUL",
                                "at": "2022-06-04T17:00:00"
                            },
                            "arrival": {
                                "iataCode": "YYZ",
                                "terminal": "1",
                                "at": "2022-06-04T18:25:00"
                            },
                            "carrierCode": "ETIHAD AIRWAYS",
                            "number": "3470",
                            "aircraft": {
                                "code": "223"
                            },
                            "operating": {
                                "carrierCode": "AC"
                            },
                            "duration": "PT1H25M",
                            "id": "28",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        },
                        {
                            "departure": {
                                "iataCode": "YYZ",
                                "terminal": "3",
                                "at": "2022-06-04T22:10:00"
                            },
                            "arrival": {
                                "iataCode": "AUH",
                                "terminal": "3",
                                "at": "2022-06-05T19:00:00"
                            },
                            "carrierCode": "ETIHAD AIRWAYS",
                            "number": "140",
                            "aircraft": {
                                "code": "789"
                            },
                            "operating": {
                                "carrierCode": "EY"
                            },
                            "duration": "PT12H50M",
                            "id": "29",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        },
                        {
                            "departure": {
                                "iataCode": "AUH",
                                "terminal": "3",
                                "at": "2022-06-05T23:35:00"
                            },
                            "arrival": {
                                "iataCode": "AMD",
                                "terminal": "2",
                                "at": "2022-06-06T04:20:00"
                            },
                            "carrierCode": "ETIHAD AIRWAYS",
                            "number": "288",
                            "aircraft": {
                                "code": "321"
                            },
                            "operating": {
                                "carrierCode": "EY"
                            },
                            "duration": "PT3H15M",
                            "id": "30",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        }
                    ]
                }
            ],
            "price": {
                "currency": "EUR",
                "total": "586.60",
                "base": "340.00",
                "fees": [
                    {
                        "amount": "0.00",
                        "type": "SUPPLIER"
                    },
                    {
                        "amount": "0.00",
                        "type": "TICKETING"
                    }
                ],
                "grandTotal": "586.60"
            },
            "pricingOptions": {
                "fareType": [
                    "PUBLISHED"
                ],
                "includedCheckedBagsOnly": true
            },
            "validatingAirlineCodes": [
                "EY"
            ],
            "travelerPricings": [
                {
                    "travelerId": "1",
                    "fareOption": "STANDARD",
                    "travelerType": "ADULT",
                    "price": {
                        "currency": "EUR",
                        "total": "586.60",
                        "base": "340.00"
                    },
                    "fareDetailsBySegment": [
                        {
                            "segmentId": "28",
                            "cabin": "ECONOMY",
                            "fareBasis": "ERV1CA",
                            "class": "E",
                            "includedCheckedBags": {
                                "quantity": 2
                            }
                        },
                        {
                            "segmentId": "29",
                            "cabin": "ECONOMY",
                            "fareBasis": "ERV1CA",
                            "class": "E",
                            "includedCheckedBags": {
                                "quantity": 2
                            }
                        },
                        {
                            "segmentId": "30",
                            "cabin": "ECONOMY",
                            "fareBasis": "ERV1CA",
                            "brandedFare": "YV",
                            "class": "E",
                            "includedCheckedBags": {
                                "quantity": 2
                            }
                        }
                    ]
                }
            ]
        },
        {
            "type": "flight-offer",
            "id": "2",
            "source": "GDS",
            "instantTicketingRequired": false,
            "nonHomogeneous": false,
            "oneWay": false,
            "lastTicketingDate": "2022-06-04",
            "numberOfBookableSeats": 9,
            "itineraries": [
                {
                    "duration": "PT25H40M",
                    "segments": [
                        {
                            "departure": {
                                "iataCode": "YUL",
                                "at": "2022-06-04T07:00:00"
                            },
                            "arrival": {
                                "iataCode": "YYZ",
                                "terminal": "1",
                                "at": "2022-06-04T08:22:00"
                            },
                            "carrierCode": "AIR CANADA",
                            "number": "401",
                            "aircraft": {
                                "code": "320"
                            },
                            "operating": {
                                "carrierCode": "AC"
                            },
                            "duration": "PT1H22M",
                            "id": "22",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        },
                        {
                            "departure": {
                                "iataCode": "YYZ",
                                "terminal": "1",
                                "at": "2022-06-04T13:00:00"
                            },
                            "arrival": {
                                "iataCode": "DEL",
                                "terminal": "3",
                                "at": "2022-06-05T12:40:00"
                            },
                            "carrierCode": "AIR INDIA",
                            "number": "188",
                            "aircraft": {
                                "code": "77W"
                            },
                            "operating": {
                                "carrierCode": "AI"
                            },
                            "duration": "PT14H10M",
                            "id": "23",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        },
                        {
                            "departure": {
                                "iataCode": "DEL",
                                "terminal": "3",
                                "at": "2022-06-05T16:45:00"
                            },
                            "arrival": {
                                "iataCode": "AMD",
                                "terminal": "2",
                                "at": "2022-06-05T18:10:00"
                            },
                            "carrierCode": "AIR INDIA",
                            "number": "861",
                            "aircraft": {
                                "code": "321"
                            },
                            "operating": {
                                "carrierCode": "AI"
                            },
                            "duration": "PT1H25M",
                            "id": "24",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        }
                    ]
                }
            ],
            "price": {
                "currency": "EUR",
                "total": "673.03",
                "base": "383.00",
                "fees": [
                    {
                        "amount": "0.00",
                        "type": "SUPPLIER"
                    },
                    {
                        "amount": "0.00",
                        "type": "TICKETING"
                    }
                ],
                "grandTotal": "673.03"
            },
            "pricingOptions": {
                "fareType": [
                    "PUBLISHED"
                ],
                "includedCheckedBagsOnly": true
            },
            "validatingAirlineCodes": [
                "AI"
            ],
            "travelerPricings": [
                {
                    "travelerId": "1",
                    "fareOption": "STANDARD",
                    "travelerType": "ADULT",
                    "price": {
                        "currency": "EUR",
                        "total": "673.03",
                        "base": "383.00"
                    },
                    "fareDetailsBySegment": [
                        {
                            "segmentId": "22",
                            "cabin": "ECONOMY",
                            "fareBasis": "TEOWYYZI",
                            "class": "K",
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "23",
                            "cabin": "ECONOMY",
                            "fareBasis": "TEOWYYZI",
                            "class": "T",
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "24",
                            "cabin": "ECONOMY",
                            "fareBasis": "TEOWYYZI",
                            "class": "K",
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        }
                    ]
                }
            ]
        },
        {
            "type": "flight-offer",
            "id": "3",
            "source": "GDS",
            "instantTicketingRequired": false,
            "nonHomogeneous": false,
            "oneWay": false,
            "lastTicketingDate": "2022-06-04",
            "numberOfBookableSeats": 9,
            "itineraries": [
                {
                    "duration": "PT26H10M",
                    "segments": [
                        {
                            "departure": {
                                "iataCode": "YUL",
                                "at": "2022-06-04T06:30:00"
                            },
                            "arrival": {
                                "iataCode": "YYZ",
                                "terminal": "1",
                                "at": "2022-06-04T10:52:00"
                            },
                            "carrierCode": "AIR CANADA",
                            "number": "485",
                            "aircraft": {
                                "code": "320"
                            },
                            "operating": {
                                "carrierCode": "AC"
                            },
                            "duration": "PT4H22M",
                            "id": "4",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        },
                        {
                            "departure": {
                                "iataCode": "YYZ",
                                "terminal": "1",
                                "at": "2022-06-04T13:00:00"
                            },
                            "arrival": {
                                "iataCode": "DEL",
                                "terminal": "3",
                                "at": "2022-06-05T12:40:00"
                            },
                            "carrierCode": "AIR INDIA",
                            "number": "188",
                            "aircraft": {
                                "code": "77W"
                            },
                            "operating": {
                                "carrierCode": "AI"
                            },
                            "duration": "PT14H10M",
                            "id": "5",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        },
                        {
                            "departure": {
                                "iataCode": "DEL",
                                "terminal": "3",
                                "at": "2022-06-05T16:45:00"
                            },
                            "arrival": {
                                "iataCode": "AMD",
                                "terminal": "2",
                                "at": "2022-06-05T18:10:00"
                            },
                            "carrierCode": "AIR INDIA",
                            "number": "861",
                            "aircraft": {
                                "code": "321"
                            },
                            "operating": {
                                "carrierCode": "AI"
                            },
                            "duration": "PT1H25M",
                            "id": "6",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        }
                    ]
                }
            ],
            "price": {
                "currency": "EUR",
                "total": "673.03",
                "base": "383.00",
                "fees": [
                    {
                        "amount": "0.00",
                        "type": "SUPPLIER"
                    },
                    {
                        "amount": "0.00",
                        "type": "TICKETING"
                    }
                ],
                "grandTotal": "673.03"
            },
            "pricingOptions": {
                "fareType": [
                    "PUBLISHED"
                ],
                "includedCheckedBagsOnly": true
            },
            "validatingAirlineCodes": [
                "AI"
            ],
            "travelerPricings": [
                {
                    "travelerId": "1",
                    "fareOption": "STANDARD",
                    "travelerType": "ADULT",
                    "price": {
                        "currency": "EUR",
                        "total": "673.03",
                        "base": "383.00"
                    },
                    "fareDetailsBySegment": [
                        {
                            "segmentId": "4",
                            "cabin": "ECONOMY",
                            "fareBasis": "TEOWYYZI",
                            "class": "K",
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "5",
                            "cabin": "ECONOMY",
                            "fareBasis": "TEOWYYZI",
                            "class": "T",
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "6",
                            "cabin": "ECONOMY",
                            "fareBasis": "TEOWYYZI",
                            "class": "K",
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        }
                    ]
                }
            ]
        },
        {
            "type": "flight-offer",
            "id": "4",
            "source": "GDS",
            "instantTicketingRequired": false,
            "nonHomogeneous": false,
            "oneWay": false,
            "lastTicketingDate": "2022-06-04",
            "numberOfBookableSeats": 9,
            "itineraries": [
                {
                    "duration": "PT26H40M",
                    "segments": [
                        {
                            "departure": {
                                "iataCode": "YUL",
                                "at": "2022-06-04T06:00:00"
                            },
                            "arrival": {
                                "iataCode": "YYZ",
                                "terminal": "1",
                                "at": "2022-06-04T07:22:00"
                            },
                            "carrierCode": "AIR CANADA",
                            "number": "481",
                            "aircraft": {
                                "code": "320"
                            },
                            "operating": {
                                "carrierCode": "AC"
                            },
                            "duration": "PT1H22M",
                            "id": "25",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        },
                        {
                            "departure": {
                                "iataCode": "YYZ",
                                "terminal": "1",
                                "at": "2022-06-04T13:00:00"
                            },
                            "arrival": {
                                "iataCode": "DEL",
                                "terminal": "3",
                                "at": "2022-06-05T12:40:00"
                            },
                            "carrierCode": "AIR INDIA",
                            "number": "188",
                            "aircraft": {
                                "code": "77W"
                            },
                            "operating": {
                                "carrierCode": "AI"
                            },
                            "duration": "PT14H10M",
                            "id": "26",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        },
                        {
                            "departure": {
                                "iataCode": "DEL",
                                "terminal": "3",
                                "at": "2022-06-05T16:45:00"
                            },
                            "arrival": {
                                "iataCode": "AMD",
                                "terminal": "2",
                                "at": "2022-06-05T18:10:00"
                            },
                            "carrierCode": "AIR INDIA",
                            "number": "861",
                            "aircraft": {
                                "code": "321"
                            },
                            "operating": {
                                "carrierCode": "AI"
                            },
                            "duration": "PT1H25M",
                            "id": "27",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        }
                    ]
                }
            ],
            "price": {
                "currency": "EUR",
                "total": "673.03",
                "base": "383.00",
                "fees": [
                    {
                        "amount": "0.00",
                        "type": "SUPPLIER"
                    },
                    {
                        "amount": "0.00",
                        "type": "TICKETING"
                    }
                ],
                "grandTotal": "673.03"
            },
            "pricingOptions": {
                "fareType": [
                    "PUBLISHED"
                ],
                "includedCheckedBagsOnly": true
            },
            "validatingAirlineCodes": [
                "AI"
            ],
            "travelerPricings": [
                {
                    "travelerId": "1",
                    "fareOption": "STANDARD",
                    "travelerType": "ADULT",
                    "price": {
                        "currency": "EUR",
                        "total": "673.03",
                        "base": "383.00"
                    },
                    "fareDetailsBySegment": [
                        {
                            "segmentId": "25",
                            "cabin": "ECONOMY",
                            "fareBasis": "TEOWYYZI",
                            "class": "K",
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "26",
                            "cabin": "ECONOMY",
                            "fareBasis": "TEOWYYZI",
                            "class": "T",
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "27",
                            "cabin": "ECONOMY",
                            "fareBasis": "TEOWYYZI",
                            "class": "K",
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        }
                    ]
                }
            ]
        },
        {
            "type": "flight-offer",
            "id": "5",
            "source": "GDS",
            "instantTicketingRequired": false,
            "nonHomogeneous": false,
            "oneWay": false,
            "lastTicketingDate": "2022-06-04",
            "numberOfBookableSeats": 9,
            "itineraries": [
                {
                    "duration": "PT22H40M",
                    "segments": [
                        {
                            "departure": {
                                "iataCode": "YUL",
                                "at": "2022-06-04T10:00:00"
                            },
                            "arrival": {
                                "iataCode": "YYZ",
                                "terminal": "1",
                                "at": "2022-06-04T11:22:00"
                            },
                            "carrierCode": "AIR CANADA",
                            "number": "407",
                            "aircraft": {
                                "code": "320"
                            },
                            "operating": {
                                "carrierCode": "AC"
                            },
                            "duration": "PT1H22M",
                            "id": "13",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        },
                        {
                            "departure": {
                                "iataCode": "YYZ",
                                "terminal": "1",
                                "at": "2022-06-04T13:00:00"
                            },
                            "arrival": {
                                "iataCode": "DEL",
                                "terminal": "3",
                                "at": "2022-06-05T12:40:00"
                            },
                            "carrierCode": "AIR INDIA",
                            "number": "188",
                            "aircraft": {
                                "code": "77W"
                            },
                            "operating": {
                                "carrierCode": "AI"
                            },
                            "duration": "PT14H10M",
                            "id": "14",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        },
                        {
                            "departure": {
                                "iataCode": "DEL",
                                "terminal": "3",
                                "at": "2022-06-05T16:45:00"
                            },
                            "arrival": {
                                "iataCode": "AMD",
                                "terminal": "2",
                                "at": "2022-06-05T18:10:00"
                            },
                            "carrierCode": "AIR INDIA",
                            "number": "861",
                            "aircraft": {
                                "code": "321"
                            },
                            "operating": {
                                "carrierCode": "AI"
                            },
                            "duration": "PT1H25M",
                            "id": "15",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        }
                    ]
                }
            ],
            "price": {
                "currency": "EUR",
                "total": "812.03",
                "base": "522.00",
                "fees": [
                    {
                        "amount": "0.00",
                        "type": "SUPPLIER"
                    },
                    {
                        "amount": "0.00",
                        "type": "TICKETING"
                    }
                ],
                "grandTotal": "812.03"
            },
            "pricingOptions": {
                "fareType": [
                    "PUBLISHED"
                ],
                "includedCheckedBagsOnly": true
            },
            "validatingAirlineCodes": [
                "AI"
            ],
            "travelerPricings": [
                {
                    "travelerId": "1",
                    "fareOption": "STANDARD",
                    "travelerType": "ADULT",
                    "price": {
                        "currency": "EUR",
                        "total": "812.03",
                        "base": "522.00"
                    },
                    "fareDetailsBySegment": [
                        {
                            "segmentId": "13",
                            "cabin": "ECONOMY",
                            "fareBasis": "UEOWYYZI",
                            "class": "L",
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "14",
                            "cabin": "ECONOMY",
                            "fareBasis": "UEOWYYZI",
                            "class": "U",
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "15",
                            "cabin": "ECONOMY",
                            "fareBasis": "UEOWYYZI",
                            "class": "K",
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        }
                    ]
                }
            ]
        },
        {
            "type": "flight-offer",
            "id": "6",
            "source": "GDS",
            "instantTicketingRequired": false,
            "nonHomogeneous": false,
            "oneWay": false,
            "lastTicketingDate": "2022-06-04",
            "numberOfBookableSeats": 9,
            "itineraries": [
                {
                    "duration": "PT23H40M",
                    "segments": [
                        {
                            "departure": {
                                "iataCode": "YUL",
                                "at": "2022-06-04T09:00:00"
                            },
                            "arrival": {
                                "iataCode": "YYZ",
                                "terminal": "1",
                                "at": "2022-06-04T10:22:00"
                            },
                            "carrierCode": "AIR CANADA",
                            "number": "405",
                            "aircraft": {
                                "code": "320"
                            },
                            "operating": {
                                "carrierCode": "AC"
                            },
                            "duration": "PT1H22M",
                            "id": "16",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        },
                        {
                            "departure": {
                                "iataCode": "YYZ",
                                "terminal": "1",
                                "at": "2022-06-04T13:00:00"
                            },
                            "arrival": {
                                "iataCode": "DEL",
                                "terminal": "3",
                                "at": "2022-06-05T12:40:00"
                            },
                            "carrierCode": "AIR INDIA",
                            "number": "188",
                            "aircraft": {
                                "code": "77W"
                            },
                            "operating": {
                                "carrierCode": "AI"
                            },
                            "duration": "PT14H10M",
                            "id": "17",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        },
                        {
                            "departure": {
                                "iataCode": "DEL",
                                "terminal": "3",
                                "at": "2022-06-05T16:45:00"
                            },
                            "arrival": {
                                "iataCode": "AMD",
                                "terminal": "2",
                                "at": "2022-06-05T18:10:00"
                            },
                            "carrierCode": "AIR INDIA",
                            "number": "861",
                            "aircraft": {
                                "code": "321"
                            },
                            "operating": {
                                "carrierCode": "AI"
                            },
                            "duration": "PT1H25M",
                            "id": "18",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        }
                    ]
                }
            ],
            "price": {
                "currency": "EUR",
                "total": "812.03",
                "base": "522.00",
                "fees": [
                    {
                        "amount": "0.00",
                        "type": "SUPPLIER"
                    },
                    {
                        "amount": "0.00",
                        "type": "TICKETING"
                    }
                ],
                "grandTotal": "812.03"
            },
            "pricingOptions": {
                "fareType": [
                    "PUBLISHED"
                ],
                "includedCheckedBagsOnly": true
            },
            "validatingAirlineCodes": [
                "AI"
            ],
            "travelerPricings": [
                {
                    "travelerId": "1",
                    "fareOption": "STANDARD",
                    "travelerType": "ADULT",
                    "price": {
                        "currency": "EUR",
                        "total": "812.03",
                        "base": "522.00"
                    },
                    "fareDetailsBySegment": [
                        {
                            "segmentId": "16",
                            "cabin": "ECONOMY",
                            "fareBasis": "UEOWYYZI",
                            "class": "L",
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "17",
                            "cabin": "ECONOMY",
                            "fareBasis": "UEOWYYZI",
                            "class": "U",
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "18",
                            "cabin": "ECONOMY",
                            "fareBasis": "UEOWYYZI",
                            "class": "K",
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        }
                    ]
                }
            ]
        },
        {
            "type": "flight-offer",
            "id": "7",
            "source": "GDS",
            "instantTicketingRequired": false,
            "nonHomogeneous": false,
            "oneWay": false,
            "lastTicketingDate": "2022-06-04",
            "numberOfBookableSeats": 9,
            "itineraries": [
                {
                    "duration": "PT24H40M",
                    "segments": [
                        {
                            "departure": {
                                "iataCode": "YUL",
                                "at": "2022-06-04T08:00:00"
                            },
                            "arrival": {
                                "iataCode": "YYZ",
                                "terminal": "1",
                                "at": "2022-06-04T09:22:00"
                            },
                            "carrierCode": "AIR CANADA",
                            "number": "403",
                            "aircraft": {
                                "code": "320"
                            },
                            "operating": {
                                "carrierCode": "AC"
                            },
                            "duration": "PT1H22M",
                            "id": "19",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        },
                        {
                            "departure": {
                                "iataCode": "YYZ",
                                "terminal": "1",
                                "at": "2022-06-04T13:00:00"
                            },
                            "arrival": {
                                "iataCode": "DEL",
                                "terminal": "3",
                                "at": "2022-06-05T12:40:00"
                            },
                            "carrierCode": "AIR INDIA",
                            "number": "188",
                            "aircraft": {
                                "code": "77W"
                            },
                            "operating": {
                                "carrierCode": "AI"
                            },
                            "duration": "PT14H10M",
                            "id": "20",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        },
                        {
                            "departure": {
                                "iataCode": "DEL",
                                "terminal": "3",
                                "at": "2022-06-05T16:45:00"
                            },
                            "arrival": {
                                "iataCode": "AMD",
                                "terminal": "2",
                                "at": "2022-06-05T18:10:00"
                            },
                            "carrierCode": "AIR INDIA",
                            "number": "861",
                            "aircraft": {
                                "code": "321"
                            },
                            "operating": {
                                "carrierCode": "AI"
                            },
                            "duration": "PT1H25M",
                            "id": "21",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        }
                    ]
                }
            ],
            "price": {
                "currency": "EUR",
                "total": "812.03",
                "base": "522.00",
                "fees": [
                    {
                        "amount": "0.00",
                        "type": "SUPPLIER"
                    },
                    {
                        "amount": "0.00",
                        "type": "TICKETING"
                    }
                ],
                "grandTotal": "812.03"
            },
            "pricingOptions": {
                "fareType": [
                    "PUBLISHED"
                ],
                "includedCheckedBagsOnly": true
            },
            "validatingAirlineCodes": [
                "AI"
            ],
            "travelerPricings": [
                {
                    "travelerId": "1",
                    "fareOption": "STANDARD",
                    "travelerType": "ADULT",
                    "price": {
                        "currency": "EUR",
                        "total": "812.03",
                        "base": "522.00"
                    },
                    "fareDetailsBySegment": [
                        {
                            "segmentId": "19",
                            "cabin": "ECONOMY",
                            "fareBasis": "UEOWYYZI",
                            "class": "L",
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "20",
                            "cabin": "ECONOMY",
                            "fareBasis": "UEOWYYZI",
                            "class": "U",
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "21",
                            "cabin": "ECONOMY",
                            "fareBasis": "UEOWYYZI",
                            "class": "K",
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        }
                    ]
                }
            ]
        },
        {
            "type": "flight-offer",
            "id": "8",
            "source": "GDS",
            "instantTicketingRequired": false,
            "nonHomogeneous": false,
            "oneWay": false,
            "lastTicketingDate": "2022-06-04",
            "numberOfBookableSeats": 9,
            "itineraries": [
                {
                    "duration": "PT25H10M",
                    "segments": [
                        {
                            "departure": {
                                "iataCode": "YUL",
                                "at": "2022-06-04T10:00:00"
                            },
                            "arrival": {
                                "iataCode": "YYZ",
                                "terminal": "1",
                                "at": "2022-06-04T11:22:00"
                            },
                            "carrierCode": "AIR CANADA",
                            "number": "407",
                            "aircraft": {
                                "code": "320"
                            },
                            "operating": {
                                "carrierCode": "AC"
                            },
                            "duration": "PT1H22M",
                            "id": "1",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        },
                        {
                            "departure": {
                                "iataCode": "YYZ",
                                "terminal": "1",
                                "at": "2022-06-04T13:00:00"
                            },
                            "arrival": {
                                "iataCode": "DEL",
                                "terminal": "3",
                                "at": "2022-06-05T12:40:00"
                            },
                            "carrierCode": "AIR INDIA",
                            "number": "188",
                            "aircraft": {
                                "code": "77W"
                            },
                            "operating": {
                                "carrierCode": "AI"
                            },
                            "duration": "PT14H10M",
                            "id": "2",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        },
                        {
                            "departure": {
                                "iataCode": "DEL",
                                "terminal": "3",
                                "at": "2022-06-05T19:10:00"
                            },
                            "arrival": {
                                "iataCode": "AMD",
                                "terminal": "2",
                                "at": "2022-06-05T20:40:00"
                            },
                            "carrierCode": "AIR INDIA",
                            "number": "531",
                            "aircraft": {
                                "code": "32A"
                            },
                            "operating": {
                                "carrierCode": "AI"
                            },
                            "duration": "PT1H30M",
                            "id": "3",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        }
                    ]
                }
            ],
            "price": {
                "currency": "EUR",
                "total": "812.03",
                "base": "522.00",
                "fees": [
                    {
                        "amount": "0.00",
                        "type": "SUPPLIER"
                    },
                    {
                        "amount": "0.00",
                        "type": "TICKETING"
                    }
                ],
                "grandTotal": "812.03"
            },
            "pricingOptions": {
                "fareType": [
                    "PUBLISHED"
                ],
                "includedCheckedBagsOnly": true
            },
            "validatingAirlineCodes": [
                "AI"
            ],
            "travelerPricings": [
                {
                    "travelerId": "1",
                    "fareOption": "STANDARD",
                    "travelerType": "ADULT",
                    "price": {
                        "currency": "EUR",
                        "total": "812.03",
                        "base": "522.00"
                    },
                    "fareDetailsBySegment": [
                        {
                            "segmentId": "1",
                            "cabin": "ECONOMY",
                            "fareBasis": "UEOWYYZI",
                            "class": "L",
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "2",
                            "cabin": "ECONOMY",
                            "fareBasis": "UEOWYYZI",
                            "class": "U",
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "3",
                            "cabin": "ECONOMY",
                            "fareBasis": "UEOWYYZI",
                            "class": "K",
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        }
                    ]
                }
            ]
        },
        {
            "type": "flight-offer",
            "id": "9",
            "source": "GDS",
            "instantTicketingRequired": false,
            "nonHomogeneous": false,
            "oneWay": false,
            "lastTicketingDate": "2022-06-04",
            "numberOfBookableSeats": 9,
            "itineraries": [
                {
                    "duration": "PT25H15M",
                    "segments": [
                        {
                            "departure": {
                                "iataCode": "YUL",
                                "at": "2022-06-04T10:00:00"
                            },
                            "arrival": {
                                "iataCode": "YYZ",
                                "terminal": "1",
                                "at": "2022-06-04T11:22:00"
                            },
                            "carrierCode": "AIR CANADA",
                            "number": "407",
                            "aircraft": {
                                "code": "320"
                            },
                            "operating": {
                                "carrierCode": "AC"
                            },
                            "duration": "PT1H22M",
                            "id": "10",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        },
                        {
                            "departure": {
                                "iataCode": "YYZ",
                                "terminal": "1",
                                "at": "2022-06-04T13:00:00"
                            },
                            "arrival": {
                                "iataCode": "DEL",
                                "terminal": "3",
                                "at": "2022-06-05T12:40:00"
                            },
                            "carrierCode": "AIR INDIA",
                            "number": "188",
                            "aircraft": {
                                "code": "77W"
                            },
                            "operating": {
                                "carrierCode": "AI"
                            },
                            "duration": "PT14H10M",
                            "id": "11",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        },
                        {
                            "departure": {
                                "iataCode": "DEL",
                                "terminal": "3",
                                "at": "2022-06-05T16:15:00"
                            },
                            "arrival": {
                                "iataCode": "AMD",
                                "terminal": "2",
                                "at": "2022-06-05T20:45:00"
                            },
                            "carrierCode": "AIR INDIA",
                            "number": "1102",
                            "aircraft": {
                                "code": "321"
                            },
                            "operating": {
                                "carrierCode": "AI"
                            },
                            "duration": "PT4H30M",
                            "stops": [
                                {
                                    "iataCode": "BOM",
                                    "duration": "PT1H",
                                    "arrivalAt": "2022-06-05T18:25:00",
                                    "departureAt": "2022-06-05T19:25:00"
                                }
                            ],
                            "id": "12",
                            "numberOfStops": 1,
                            "blacklistedInEU": false
                        }
                    ]
                }
            ],
            "price": {
                "currency": "EUR",
                "total": "812.03",
                "base": "522.00",
                "fees": [
                    {
                        "amount": "0.00",
                        "type": "SUPPLIER"
                    },
                    {
                        "amount": "0.00",
                        "type": "TICKETING"
                    }
                ],
                "grandTotal": "812.03"
            },
            "pricingOptions": {
                "fareType": [
                    "PUBLISHED"
                ],
                "includedCheckedBagsOnly": true
            },
            "validatingAirlineCodes": [
                "AI"
            ],
            "travelerPricings": [
                {
                    "travelerId": "1",
                    "fareOption": "STANDARD",
                    "travelerType": "ADULT",
                    "price": {
                        "currency": "EUR",
                        "total": "812.03",
                        "base": "522.00"
                    },
                    "fareDetailsBySegment": [
                        {
                            "segmentId": "10",
                            "cabin": "ECONOMY",
                            "fareBasis": "UEOWYYZI",
                            "class": "L",
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "11",
                            "cabin": "ECONOMY",
                            "fareBasis": "UEOWYYZI",
                            "class": "U",
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "12",
                            "cabin": "ECONOMY",
                            "fareBasis": "UEOWYYZI",
                            "class": "K",
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        }
                    ]
                }
            ]
        },
        {
            "type": "flight-offer",
            "id": "10",
            "source": "GDS",
            "instantTicketingRequired": false,
            "nonHomogeneous": false,
            "oneWay": false,
            "lastTicketingDate": "2022-06-04",
            "numberOfBookableSeats": 9,
            "itineraries": [
                {
                    "duration": "PT26H10M",
                    "segments": [
                        {
                            "departure": {
                                "iataCode": "YUL",
                                "at": "2022-06-04T09:00:00"
                            },
                            "arrival": {
                                "iataCode": "YYZ",
                                "terminal": "1",
                                "at": "2022-06-04T10:22:00"
                            },
                            "carrierCode": "AIR CANADA",
                            "number": "405",
                            "aircraft": {
                                "code": "320"
                            },
                            "operating": {
                                "carrierCode": "AC"
                            },
                            "duration": "PT1H22M",
                            "id": "7",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        },
                        {
                            "departure": {
                                "iataCode": "YYZ",
                                "terminal": "1",
                                "at": "2022-06-04T13:00:00"
                            },
                            "arrival": {
                                "iataCode": "DEL",
                                "terminal": "3",
                                "at": "2022-06-05T12:40:00"
                            },
                            "carrierCode": "AIR INDIA",
                            "number": "188",
                            "aircraft": {
                                "code": "77W"
                            },
                            "operating": {
                                "carrierCode": "AI"
                            },
                            "duration": "PT14H10M",
                            "id": "8",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        },
                        {
                            "departure": {
                                "iataCode": "DEL",
                                "terminal": "3",
                                "at": "2022-06-05T19:10:00"
                            },
                            "arrival": {
                                "iataCode": "AMD",
                                "terminal": "2",
                                "at": "2022-06-05T20:40:00"
                            },
                            "carrierCode": "AIR INDIA",
                            "number": "531",
                            "aircraft": {
                                "code": "32A"
                            },
                            "operating": {
                                "carrierCode": "AI"
                            },
                            "duration": "PT1H30M",
                            "id": "9",
                            "numberOfStops": 0,
                            "blacklistedInEU": false
                        }
                    ]
                }
            ],
            "price": {
                "currency": "EUR",
                "total": "812.03",
                "base": "522.00",
                "fees": [
                    {
                        "amount": "0.00",
                        "type": "SUPPLIER"
                    },
                    {
                        "amount": "0.00",
                        "type": "TICKETING"
                    }
                ],
                "grandTotal": "812.03"
            },
            "pricingOptions": {
                "fareType": [
                    "PUBLISHED"
                ],
                "includedCheckedBagsOnly": true
            },
            "validatingAirlineCodes": [
                "AI"
            ],
            "travelerPricings": [
                {
                    "travelerId": "1",
                    "fareOption": "STANDARD",
                    "travelerType": "ADULT",
                    "price": {
                        "currency": "EUR",
                        "total": "812.03",
                        "base": "522.00"
                    },
                    "fareDetailsBySegment": [
                        {
                            "segmentId": "7",
                            "cabin": "ECONOMY",
                            "fareBasis": "UEOWYYZI",
                            "class": "L",
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "8",
                            "cabin": "ECONOMY",
                            "fareBasis": "UEOWYYZI",
                            "class": "U",
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        },
                        {
                            "segmentId": "9",
                            "cabin": "ECONOMY",
                            "fareBasis": "UEOWYYZI",
                            "class": "K",
                            "includedCheckedBags": {
                                "quantity": 1
                            }
                        }
                    ]
                }
            ]
        }
    ],
    "dictionaries": {
        "locations": {
            "YUL": {
                "cityCode": "YMQ",
                "countryCode": "CA"
            },
            "AUH": {
                "cityCode": "AUH",
                "countryCode": "AE"
            },
            "AMD": {
                "cityCode": "AMD",
                "countryCode": "IN"
            },
            "DEL": {
                "cityCode": "DEL",
                "countryCode": "IN"
            },
            "YYZ": {
                "cityCode": "YTO",
                "countryCode": "CA"
            }
        },
        "aircraft": {
            "223": "AIRBUS  A220-300",
            "320": "AIRBUS A320",
            "321": "AIRBUS A321",
            "789": "BOEING 787-9",
            "32A": "AIRBUS A320 (SHARKLETS)",
            "77W": "BOEING 777-300ER"
        },
        "currencies": {
            "EUR": "EURO"
        },
        "carriers": {
            "AC": "AIR CANADA",
            "EY": "ETIHAD AIRWAYS",
            "AI": "AIR INDIA"
        }
    }
}


export const tourData = [
    {
        "id": "2296",
        "type": "activity",
        "self": {
            "href": "https://test.api.amadeus.com/v1/shopping/activities/2296",
            "methods": [
                "GET"
            ]
        },
        "name": "6-Day Wildlife Tour of Gujarat from Ahmedabad",
        "shortDescription": "Visit Asiatic lions in Gir Forest National Park, Nal Sarovar Birds Sanctuary, Blackbuck National Park in Bhavnagar, Wild Ass Wildlife Sanctuary and Kutch Bustard Sanctuary. Explore Kutchi embroidery, Bandhani (tie-dye) textile and handicraft. Stay in Kutch silver sand desert tented camp.",
        "geoCode": {
            "latitude": "23.168370",
            "longitude": "72.578150"
        },
        "pictures": [
            "https://media.tacdn.com/media/attractions-splice-spp-674x446/06/74/9d/5d.jpg"
        ],
        "bookingLink": "https://b2c.mla.cloud/c/mPhtyu0i?c=2WxbgL36",
        "price": {
            "currencyCode": "EUR",
            "amount": "1209.00"
        }
    },
    {
        "id": "2298",
        "type": "activity",
        "self": {
            "href": "https://test.api.amadeus.com/v1/shopping/activities/2298",
            "methods": [
                "GET"
            ]
        },
        "name": "Private Tour: Full-Day City Tour in Ahmedabad with Akshardham",
        "shortDescription": "Ahmedabad, also known as Amdavad, is the largest city and former capital of Gujarat State. It was built by Sultan Ahmed Shah to serve as his capital in 1411 A.D. You will visit Jama Maszid, Sidi Saiyed's Mosque, Hathee Singh Jain Temple (http://www.tripadvisor.com/Attraction_Review-g297608-d325378-Reviews-Hathee_Singh_Jain_Temple-Ahmedabad_Gujarat.html), Sabarmati Ashram, Adalaj Stepwell and Akshardham Temple.",
        "geoCode": {
            "latitude": "23.168370",
            "longitude": "72.578150"
        },
        "rating": "4.500000",
        "pictures": [
            "https://media.tacdn.com/media/attractions-splice-spp-674x446/06/74/b1/f1.jpg"
        ],
        "bookingLink": "https://b2c.mla.cloud/c/ahUcZZ41?c=2WxbgL36",
        "price": {
            "currencyCode": "EUR",
            "amount": "56.00"
        }
    },
    {
        "id": "2302",
        "type": "activity",
        "self": {
            "href": "https://test.api.amadeus.com/v1/shopping/activities/2302",
            "methods": [
                "GET"
            ]
        },
        "name": "Private Tour: Full-Day Stepwells Tour from Ahmedabad",
        "shortDescription": "Excursion to two historic stepwells from Ahmedabad city. Rani ki Vav (the Queen’s Stepwell) is a UNESCO World Heritage Site. This stepwell is adorned with numerous panels with fascinating sculptures and pillars with intricate carvings. Also, the Adalji stepwell is octagonal in shape and supported by intricately carved pillars.",
        "geoCode": {
            "latitude": "23.168370",
            "longitude": "72.578150"
        },
        "pictures": [
            "https://media.tacdn.com/media/attractions-splice-spp-674x446/07/bf/af/45.jpg"
        ],
        "bookingLink": "https://b2c.mla.cloud/c/4kcsncpk?c=2WxbgL36",
        "price": {
            "currencyCode": "EUR",
            "amount": "64.00"
        }
    },
    {
        "id": "252412",
        "type": "activity",
        "self": {
            "href": "https://test.api.amadeus.com/v1/shopping/activities/252412",
            "methods": [
                "GET"
            ]
        },
        "name": "Ahmedabad: Private Temples and Religion Tour with Stepwell",
        "shortDescription": "Take a private tour of Ahmedabad and its famous temples in this full-day tour. Discover amazing architecture, rich history, and see the headquarters of the fight for Indian independence.",
        "geoCode": {
            "latitude": "23.022505",
            "longitude": "72.571362"
        },
        "rating": "4.000000",
        "pictures": [
            "https://cdn.getyourguide.com/img/tour_img-1245369-145.jpg"
        ],
        "bookingLink": "https://b2c.mla.cloud/c/vVLqcj1fXN?c=2WxbgL36",
        "price": {
            "currencyCode": "EUR",
            "amount": "48.00"
        }
    }
]


export const guidelineData = {
    "area": {
        "name": "India",
        "iataCode": "IN",
        "areaType": "Country"
    },
    "summary": "<p>Authorities have relied on lockdowns and localised restrictions to tackle the COVID-19 outbreak; controlling the spread of infections is often challenging owing to India's large population. Partial lockdowns, weekend lockdowns and night curfew measures were frequently reimposed in some states since late 2021 due to a new outbreak, amplified by a dearth of resources such as hospital beds and oxygen cylinders. Cases have dropped significantly since the beginning of 2022 and most restrictions have been eased. However, another outbreak cannot be ruled out due to the country's strained healthcare system and a dense population.</p>",
    "diseaseRiskLevel": "Medium",
    "diseaseInfection": {
        "date": "2022-05-22",
        "level": "Moderate",
        "rate": 2.39,
        "infectionMapLink": "https://www.nytimes.com/interactive/2020/world/asia/india-coronavirus-cases.html"
    },
    "diseaseCases": {
        "date": "2022-05-31",
        "deaths": 524636,
        "confirmed": 43160832
    },
    "hotspots": "<p>Delhi, Kerala</p>",
    "dataSources": {},
    "areaRestrictions": [
        {
            "date": "2022-05-17",
            "text": "<p>Full lockdown: Non-essential movement of people and vehicles is banned. Non-essential businesses are closed, restaurants are mostly limited to takeaway and delivery services, and public transport is either suspended or operating at reduced capacity. Affected areas include the following:</p> <p><strong>Sikkim</strong>: Areas where positive cases are discovered at the discretion of local officials until further notice</p> <p>Partial lockdown: Partial lockdown measures may include weekend lockdowns, limited capacities onboard public transportation and at venues, and opening of markets and shops during fixed hours. Affected areas include the following:</p> <p>Currently, there are no areas designated with partial lockdown measures.</p>",
            "restrictionType": "Lockdown"
        },
        {
            "date": "2022-05-17",
            "text": "<p>Quarantine requirements for domestic travellers differ from state to state and they might need to procure an e-pass to enter in some cases. Flights and interstate railway services have largely resumed nationwide.</p> <p><strong>Andaman and Nicobar Islands</strong></p> <p>-Negative PCR test no older than 48 hours to be presented prior to entry. Fully vaccinated travellers are exempted.</p> <p>-Home or institutional quarantine until result of on-arrival test is received.</p> <p>-In North and Middle Andaman district, public transport is operating at 75 percent capacity.</p> <p><strong>Andhra Pradesh</strong></p> <p>-Passengers must download Aarogya Setu app.</p> <p><strong>Assam</strong></p> <p>-All asymptomatic passengers who are residents of northeastern states other than Assam, arriving at any airport in Assam, and directly travelling towards any other northeastern state, shall be exempted from on-arrival testing, provided they have proof of address in a northeastern state.</p> <p>-All transit passengers of intra-Assam and inter-northeastern states are also exempted from on-arrival testing, provided they have proof of address.</p> <p>-Passengers must download Aarogya Setu app.</p> <p><strong>Bihar</strong></p> <p>-Incoming unvaccinated passengers from states with high rates of infection must get tested upon arrival</p> <p>-Air travellers bound for <strong>Gaya</strong> must either have a negative result of a COVID-19 RT-RCR test taken within 72 hours before departure or take a rapid antigen test upon arrival for free</p> <p>-<strong>Darbhanga</strong> bound travellers departing from Mumbai or Chennai must have a negative result of a COVID-19 RT-RCR test taken within 72 hours before departure to board flights.</p> <p>-Travellers must install the Aarogya Setu app</p> <p><strong>Chandigarh</strong></p> <p>-PCR test required 72 hours before or a vaccine certificate of at least one dose, over two weeks old for travellers aged 10 years or older</p> <p>-Travellers must install the Aarogya Setu app</p> <p>-Travellers must register on COVA Punjab App before departure</p> <p><strong>Chhattisgarh</strong></p> <p>-PCR test is required 72 hours before or a certificate proving vaccine completion</p> <p><strong>Delhi</strong></p> <p>-Sample collection and thermal screening are conducted for all air arrivals. Those who are positive for COVID-19 must quarantine at home or a medical facility for 10 days</p> <p>-Travellers must install the Aarogya Setu app</p> <p><strong>Goa</strong></p> <p>-A negative RT-PCR/TrueNAT/CBNAAT/Rapid Antigen Test test taken at an ICMR accredited lab 72 hours prior or proof of full vaccination is required for entry -Only RT-PCR tests a valid for those entering from Kerala state; officials imposed a five-day instituional quarantine mandate for students and employees arriving from Kerala;</p> <p>-A PCR test on day five is required for all to end quarantine; some essential workers and selected travellers may serve five-day home quarantine</p> <p>-Travellers must install the Aarogya Setu app</p> <p><strong>Gujarat</strong></p> <p>-<strong>Ahmedabad</strong> bound air travellers from Kerala or Maharashtra states must have either a negative result of a COVID-19 RT-PCR test taken at an ICMR accredited lab within 72 hours before departure or a certificate of full vaccination; Those without are subject to a free rapid antigen test upon arrival</p> <p>-All <strong>Surat</strong> bound air travellers must have either a negative result of a COVID-19 RT-PCR test taken at an ICMR accredited lab within 72 hours before departure or a certificate of full vaccination; they must also fill out an oline <a href=\"https://www.suratmunicipal.gov.in/EServices/Covid19SelfReporting\" target=\"_blank\" rel=\"noopener\">self-report form</a> and generate a traveler ID, then download/install the <a href=\"http://office.suratmunicipal.org/SMCCOVID19/Guest\" target=\"_blank\" rel=\"noopener\">SMC covid-19 tracker app</a> and enter their traveller ID</p> <p>-Travellers must install the Aarogya Setu app</p> <p><strong>Himachal Pradesh</strong></p> <p>-Travellers must install the Aarogya Setu app</p> <p><strong>Jammu and Kashmir</strong></p> <p>-Air travellers must have either a negative result of a COVID-19 RT-PCR test taken at an ICMR accredited lab within 72 hours before departure or a certificate of full vaccination. Those without are subject to a free rapid antigen test upon arrival</p> <p>-Travellers must install the Aarogya Setu app</p> <p>-Home quarantine for 14 days or until the arrival-test produces a negative result; those without the app are subject to institutional quarantine</p> <p>-Asymptomatic business travellers may be exempted from quarantine</p> <p>-Only Budgam-Banihal rail service is operating</p> <p>-Those travelling to Kathua district by road must get tested at the Lakhanour checkpoint</p> <p><strong>Jharkhand</strong></p> <p>-PCR test is required 72 hours before departure (only for travellers from high-risk states)</p> <p>-All air arrivals must test for COVID-19 at airports upon arrival, unless when in possession of either a negative result of a COVID-19 RT-PCR test taken at an ICMR accredited lab within 72 hours before departure or a certificate of full vaccination</p> <p>-Travellers must install the Aarogya Setu app</p> <p><strong>Karnataka</strong></p> <p>-A previous RT-PCR requirement for passengers from Goa and Kerala has been lifted; instead, they must present proof of full vaccination</p> <p><strong>Kerala</strong></p> <p>-Passengers must carry proof of full vaccination</p> <p>-Symptomatic passengers must carry negative RT-PCR test results</p> <p>-Travellers must register in the Jagratha portal (<a href=\"https://covid19jagratha.kerala.nic.in/home/\" target=\"_blank\" rel=\"noopener\">https://covid19jagratha.kerala.nic.in/home/</a>)</p> <p>-<strong>Kochi</strong> metro service is operating from 08:00-20:00 daily.</p> <p>-Travellers must install the Aarogya Setu app</p> <p><strong>Ladakh</strong></p> <p>-All unvaccinated arrivals to the union territory must present a negative RT-PCR test no older than 96 hours; those without a pre-arrival test must self-quarantine for seven days</p> <p>-All arrivals must conduct an upon-arrival COVID-19 RT-PCR test regardless of their pre-departure test result or vaccination status</p> <p>-Travellers must install the Aarogya Setu app</p> <p><strong>Madhya Pradesh</strong></p> <p>-Mandatory to fill out the self-declaration form (<a href=\"https://indore.acceldash.com/self-declaration-form\" target=\"_blank\" rel=\"noopener\">https://indore.acceldash.com/self-declaration-form</a>)</p> <p>-<strong>Gwalior</strong> bound air travellers from Maharastra state must have a negative certificate of a COVID-19 RT-PCR test taken within 72 hours before departure or undergo a free upon-arrival RT-PCT test</p> <p>-Travellers must install the Aarogya Setu app</p> <p><strong>Maharashtra</strong></p> <p>-Travellers from any other state must either bring a negative PCR report issued within 72 hours of boarding, or be fully vaccinated</p> <p>-Passengers must carry a vaccination certificate or a negative PCR test for travel within the state</p> <p>-Travellers must install the Aarogya Setu app</p> <p><strong>Meghalaya</strong></p> <p>-RT-PCR test no older than 72 hours required for travellers age 15 and older, alternatively, travellers may undergo PCR tests upon arrival; those testing upon arrival must quarantine at home or otherwise designated facility until the test result is available</p> <p>-passengers must register to the state portal (<a href=\"http://meghalayaonline.gov.in/covid/testing.htm\" target=\"_blank\" rel=\"noopener\">http://meghalayaonline.gov.in/covid/testing.htm</a>)</p> <p>-Travellers must install the Aarogya Setu app</p> <p><strong>Mizoram</strong></p> <p>-PCR test 72 hours before or a certificate proving recovery no older than three months may exempt travellers from mandatory quarantine</p> <p>-Self-monitoring for seven days is required</p> <p>-Public transport may operate at one-third capacity in Aizawl district; service is suspended on Sundays</p> <p>-Mandatory to apply for mPASS at the mCOVID-19 app (<a href=\"https://play.google.com/store/apps/details?id=gov.mizoram.mcovid19&amp;hl=en&amp;gl=US\" target=\"_blank\" rel=\"noopener\">https://play.google.com/store/apps/details?id=gov.mizoram.mcovid19&amp;hl=en&amp;gl=US</a>)</p> <p>-Travellers must install the Aarogya Setu app</p> <p><strong>Nagaland</strong></p> <p>-RT-PCR or NAAT test 72 hours before travel if unvaccinated</p> <p>- Home or Institutional quarantine for seven days</p> <p>-Mandatory to install the Covid Nagaland visitor’s app and to fill out the Self Declaration form</p> <p>-Public and private transport may operate at 100 percent capacity for tested or vaccinated, fully or partially, travellers</p> <p>-Travellers must install the Aarogya Setu app</p> <p><strong>Punjab</strong></p> <p>-PCR test 72 hours before or a certificate proving vaccine completion</p> <p>-Travellers must install the Cova app (iOS: <a href=\"https://apps.apple.com/in/app/cova-punjab/id1501977319\" target=\"_blank\" rel=\"noopener\">https://apps.apple.com/in/app/cova-punjab/id1501977319</a>, Android: <a href=\"https://play.google.com/store/apps/details?id=in.gov.punjab.cova&amp;hl=en_IN\" target=\"_blank\" rel=\"noopener\">https://play.google.com/store/apps/details?id=in.gov.punjab.cova&amp;hl=en_IN</a>)</p> <p>-Travellers must install the Aarogya Setu app</p> <p><strong>Rajasthan</strong></p> <p>-All international travellers are required to undergo a PCR test upon arrival at the airport and quarantine at home or at an institutional facility while waiting for the results.</p> <p>-Domestic travellers must present a certificate of full vaccination or a PCR test taken within 72 hours before departure. If failing to present any of these documents, travellers will be required to take a PCR test upon arrival and quarantine for seven days.</p> <p><strong>Sikkim</strong></p> <p>All foreign nationals who were in India for more than 10 days and have a negative result of a COVID-19 RT-PCR test taken within 72 hours before departure can enter Sikkim state. Information on whether travellers need to be vaccinated against COVID-19 to enter was not immediately available; previously, only fully vaccinated domestic travellers were allowed entry.</p> <p><strong>Telangana</strong></p> <p>-Asymptomatic travellers are exempted from quarantine. Self-monitor for at least 14 days</p> <p>-Travellers must install the Arogya Setu app</p> <p><strong>Tripura</strong></p> <p>-All air arrivals must have either a negativer certificate of a COCID-19 test taken at an ICMR accredited lab within 72 hours before departure or a certificate of full vaccination to enter.</p> <p>-Symptomatic travellers must quarantine for 14 days</p> <p>-Travellers must install the Arogya Setu app</p> <p><strong>Uttarakhand</strong></p> <p>-PCR test taken 72 hours before or certificate proving vaccine completion may exempt travellers from quarantine</p> <p>-Home quarantine for seven days</p> <p>-Travellers must register on the state website (<a href=\"http://smartcitydehradun.uk.gov.in/\" target=\"_blank\" rel=\"noopener\">http://smartcitydehradun.uk.gov.in/</a>.)</p> <p>-Travellers must install the Arogya Setu app</p> <p><strong>Uttar Pradesh</strong></p> <p>-All air arrivals must have either a negativer certificate of a COCID-19 test taken within 72 hours before departure or a certificate of full vaccination to enter.</p> <p>-All arrivals in <strong>Agra</strong> must conduct upon-arrival RT-PCR test even when arriving with a negative pre-departure test result</p> <p>-Travellers must install the Aarogya Setu app and register themselves on <a href=\"https://reg.upcovid.in\" target=\"_blank\" rel=\"noopener\">https://reg.upcovid.in</a></p> <p>-Symptomatic arrivals from Maharashtra and Kerala states must quarantine at home for 14 days</p> <p><strong>West Bengal</strong></p> <p>-PCR test required 72 hours before, or proof of vaccine completion</p> <p>-Those without a valid certificate must undergo 14 days quarantine</p> <p>-Travellers must install Sandhane app (currently available only for Android: <a href=\"https://play.google.com/store/apps/details?id=com.wbhealth.general.data.ui&amp;hl=en_IN&amp;gl=US\" target=\"_blank\" rel=\"noopener\">https://play.google.com/store/apps/details?id=com.wbhealth.general.data.ui&amp;hl=en_IN&amp;gl=US</a>)</p> <p>-Travellers must install the Arogya Setu app</p>",
            "restrictionType": "Domestic Travel"
        },
        {
            "date": "2022-06-01",
            "text": "<p>Non-essential businesses may be operating for limited hours in some areas nationwide. These restrictions are imposed or lifted at short notice by local authorities, depending on the COVID-19 situation of the area. Some examples include:</p> <p><strong>Assam</strong></p> <p>-Shops may operate with normal business hours. Face masks are mandatory in public places.</p> <p><strong>Bihar</strong></p> <p>-Cinemas, gyms, shopping centres, nightclubs, public pools, restaurants and hotels are allowed to operate at 50 percent capacity so no restrictions of operating hours. Weddings and funerals are capped at 200 people and all other gatherings are allowed with prior authorisation.</p> <p><strong>Goa</strong></p> <p>-Hospitality establishments may operate from 07:00-23:00 local time daily</p> <p>-Spas, casinos and massage parlours as well as parks, auditoriums, cinemas and other entertainment venues reopened at half capacity for those with a full vaccination against COVID-19 dating at least 15 days or a negative PCR test no older than 72 hours.</p> <p><strong>Gujarat</strong></p> <p>-Shops may open until 23:00 local time</p> <p>-All establiments are permitted to function at 75% capacity</p> <p>-Social, educational, cultural, religious and political gatherings are allowed up to 150 people, funnerals to 100 people and weddings at 300 people</p> <p>-Effective 2 March, only a mask mandate will remain in place as will the requirement to maintain social distancing where possible.</p> <p><strong>Himachal Pradesh</strong></p> <p>- Effective 1 April, only a mask mandate remains in place.</p> <p><strong>Jammu and Kashmir</strong></p> <p>-Indoor and outdoor gatherings and banquet hall events are allowed up to 50 percent capacity and cinemas, theatres, restaurants, gyms, nightclubs and public pools at 25 percent capacity; banquet hall events require a negative COVID-19 test no older than 72 hours.</p> <p>-All schools resumed in-person learning by 28 February</p> <p><strong>Karnataka</strong></p> <p>-Restaurants, bars and shops can operate at full capacity and cinemas at half capacity</p> <p>-Large gatherings and events remain banned until further notice</p> <p>-Weddings are allowed up to 200 people indoors and 300 outdoors</p> <p><strong>Kerala</strong></p> <p>-Cinemas, theatres and indoor auditoriums are allowed to operate at half capacity; however, only fully vaccinated individuals will be allowed to enter those venues. The limit on weddings will be increased from 20 to 50 people. Religious festivals are allowed up to 1,500 people</p> <p><strong>Ladakh</strong></p> <p>-Fitness centres, markets, places of worship and entertainment, hospitality and personal care establishments are operating with restrictions</p> <p>-Large gatherings require written permission from officials</p> <p><strong>Madhya Pradesh</strong></p> <p>-Cinemas, malls, gyms, restaurants and schools are now allowed to operate at 100 percent capacity. Masks and social distancing measures remain mandatory.</p> <p><strong>Meghalaya</strong></p> <p>-All non-essential gatherings are banned; weddings, funerals and other permitted gatherings are capped under 50 percent capacity and must not exceed 100 attendees.</p> <p><strong>Mizoram</strong></p> <p>-Most businesses are allowed to operate daily at half capacity without restrictions on hours.</p> <p><strong>Nagaland</strong></p> <p>-Shops can open from 06:00-18:00 local time daily</p> <p><strong>Odisha</strong></p> <p>-Most businesses are operating and gatherings allowed without restrictions</p> <p>-Until 31 March weddings are limited to 500 people and funerals to 250 people</p> <p><strong>Rajasthan</strong></p> <p>-Effective 31 January, markets, restaurants, shopping malls and other commercial establishments are allowed to operate until 22:00 local time and gatherings will be capped at 100 people.</p> <p><strong>Uttar Pradesh</strong></p> <p>-Limits on gatherings in open and closed venues, including weddings, were lifted from 18 March.</p> <p>-Hospitality venues, fitness centres, public pools and cinemas have reopened at reduced capacities and public and privates offices at full capacity.</p> <p><strong>Uttarakhand</strong></p> <p>-Restaurants, hotels, gyms, cinemas, theatres, shopping and event centres and personal care businesses are allowed to operate at full capacity and political gatherings at reduced capacities.</p><p><strong>Covid Pass is required for some domestic activities:</strong> Mizoram: M-pass required for travellers entering the state</p> <p>Maharashtra: individuals must show their ‘safe status' on the Aarogya Setu App or proof of vaccination to access some venues, including cinemas and auditoriums.</p> <p>Puducherry: Proof of vaccination may be checked for entry to hotels, shopping malls, restaurants and cinemas. Tourists to the territory will also have to provide proof of full vaccination to be allowed entry.</p> <p>Goa: Proof of vaccination may be checked for entry to hotels, shopping malls, restaurants and cinemas. Tourists to the territory will also have to provide proof of full vaccination to be allowed entry.</p> <p>Haryana: Proof of full vaccination required for entry to public areas from 1 January.</p> <p>Chandigarh: Proof of full vaccination required for entry to public areas from 1 January.</p> <p>Rajasthan: Proof of full vaccination required for entry to public areas from around 1 February.</p><p><strong>Covid Pass availability:</strong> Mizoram: Apply through app which can be downloaded at <a href=\"https://play.google.com/store/apps/details?id=gov.mizoram.mcovid19&amp;hl=en&amp;gl=US\" target=\"_blank\" rel=\"noopener\">https://play.google.com/store/apps/details?id=gov.mizoram.mcovid19&amp;hl=en&amp;gl=US</a></p>",
            "restrictionType": "Others"
        }
    ],
    "areaAccessRestriction": {
        "transportation": {
            "date": "2022-05-27",
            "text": "<p>Since 27 March, a ban on commercial international passenger flights to and from any countries has been lifted. Regular international flights services resumed after around two years of suspension.</p>",
            "transportationType": "FLIGHT",
            "isBanned": "No",
            "throughDate": "indef"
        },
        "declarationDocuments": {
            "date": "2022-05-17",
            "documentRequired": "Yes",
            "travelDocumentationLink": "https://www.newdelhiairport.in/airsuvidha/apho-registration"
        },
        "entry": {
            "date": "2022-05-17",
            "text": "<p>All foreign nationals on short-term tourism are allowed to enter India, regardless of vaccination status. Additional travellers with long-term visas are also allowed to enter, but permitted travellers will be subject to quarantine if they test positive in random tests upon arrival.</p> <p>Some land borders are closed. Limited cross-border bus service is operating between Uttar Pradesh and western Nepal. Local authorities in Manipur state temporarily suspended free movement of people between Moreh, Tengnoupal district, and Tamu in Myanmar’s Sagaing region, in early February.</p>",
            "ban": "No",
            "throughDate": "indef",
            "rules": "https://www.newdelhiairport.in/pdf/Guidelines-for-International-arrivals-updated-on-10th-February-2022-11-02-22.pdf",
            "borderBan": [
                {
                    "borderType": "maritimeBorderBan",
                    "status": "Partially Open"
                },
                {
                    "borderType": "landBorderBan",
                    "status": "Partially Open"
                }
            ]
        },
        "diseaseTesting": {
            "date": "2022-05-19",
            "text": "<p><strong>Before travel</strong></p><p>All arriving unvaccinated travellers or those who do not have a vaccination certificate are required to upload a negative RT-PCR test result to the Air Suvidha portal (<a href=\"http://www.newdelhiairport.in\">www.newdelhiairport.in</a>), taken within 72 hours prior to departure.</p>\n<p>Effective 14 February, travellers from countries whose vaccination programmes are recognised by the Indian government may upload a vaccination certificate instead of pre-travel test.</p>\n<p><strong>Upon arrival</strong></p><p>Around 2 percent of travellers on each flight arriving from other countries will be tested at random on arrival. Such travellers in each flight shall be identified by the concerned airlines. They may submit their samples and leave the airport upon arrival. Passengers found to be symptomatic during thermal screening upon arrival will also be required to undergo a COVID-19 test.</p>\n<p>Those who test positive are required to isolate, however, further details of the isolation procedure were not immediately made clear and will be arranged on a case-by-case basis.</p>\n<p>Travellers who test positive on an upon-arrival test will be re-tested during their isolation.</p>\n",
            "isRequired": "Yes",
            "when": "Before travel, Upon arrival",
            "requirement": "Mandatory",
            "rules": " https://www.newdelhiairport.in/pdf/Guidelines-for-International-arrivals-updated-on-10th-February-2022-11-02-22.pdf",
            "testType": "PCR",
            "minimumAge": 5,
            "validityPeriod": {
                "delay": "P72H",
                "referenceDateType": "Departure"
            }
        },
        "tracingApplication": {
            "date": "2022-05-19",
            "text": "<p><span>All incoming travellers have to download the Aarogya Setu contact tracing mobile app found here </span><span><a href=\"https://www.mygov.in/aarogya-setu-app/\" target=\"_blank\" rel=\"noopener\">https://www.mygov.in/aarogya-setu-app/</a></span><span>, upon arrival and register their details with respective state authorities. </span></p> <p><span></span></p>",
            "isRequired": "Yes",
            "iosUrl": [
                "https://apps.apple.com/in/app/aarogyasetu/id1505825357"
            ],
            "androidUrl": [
                "https://play.google.com/store/apps/details?id=nic.goi.aarogyasetu"
            ]
        },
        "quarantineModality": {
            "date": "2022-05-17",
            "text": "<p>Only travellers who test positive on a random upon arrival test will be isolated while all other travellers must self-monitor for symptoms for 14 days and report any COVID-19 related symptoms either to the nearest health facility or the government helpline 1075.</p>",
            "eligiblePerson": "None",
            "mandateList": "https://www.newdelhiairport.in/pdf/Guidelines-for-International-arrivals-updated-on-10th-February-2022-11-02-22.pdf"
        },
        "mask": {
            "date": "2022-05-17",
            "text": "<p>The wearing of face masks in public, including onboard public transportation, is compulsory in most places. Masks are mandatory in airports and on flights.</p> <p>Wearing of facemasks in public areas in <strong>Delhi</strong> is mandatory. Violators will be fined INR500 (USD6.50).</p> <p>Masks are mandatory in parts of <strong>National Capital Region (NCR)</strong>, including in the Baghpat, Bulandshahr, Faridabad, Gautam Buddh Nagar, Ghaziabad, Gurugram, Hapur, Jhajjar, Meerut and Sonipat districts. Wearing of facemasks in public is optional in other areas.</p> <p>Face masks are mandatory in cinemas, shopping malls, department stores, shops, schools and universities, public and private offices, all indoor gatherings and on public transport in <strong>Chandigarh</strong>. Violators will be fined INR500 (USD6.50).</p> <p>Face masks are mandatory in public areas of <strong>Chhattisgarh</strong>.</p> <p>Face masks are mandatory in public spaces, including on public transport, in <strong>Karnataka</strong>.</p> <p>Face masks are mandatory in public spaces in <strong>Kerala</strong>. Violators will be fined INR500 (USD6.50).</p> <p>Face masks are mandatory in public spaces in <strong>Tamil Nadu</strong>. Violators will be fined INR500 (USD6.50).</p> <p>Face masks are mandatory in public spaces in <strong>Telangana</strong>. Violators will be fined INR1,00 (USD13).</p> <p>Face masks are mandatory in public spaces in <strong>Andhra Pradesh</strong>. Violators will be fined INR100 (USD1.30).</p> <p>Face masks are mandatory at all indoor gatherings and indoor venues, including public transport in <strong>Punjab</strong>; masks are also recommended in all crowded outdoor areas.</p> <p>Masks are mandatory in <strong>Uttar Pradesh's Baghpat, Lucknow, Bulandshahr, Gautam Buddh Nagar, Ghaziabad, Hapur and Meerut districts</strong>.</p>",
            "isRequired": "Partial"
        },
        "exit": {
            "date": "2022-05-17",
            "text": "<p>Permitted outbound travellers will be allowed to board flights if only they carry a negative RT-PCR test report as per the guidelines of the destination country.</p>",
            "specialRequirements": "Yes, conditional",
            "isBanned": "No"
        },
        "otherRestriction": {},
        "diseaseVaccination": {
            "date": "2022-05-17",
            "text": "<p>Effective 14 February, travellers from countries whose vaccination programmes are recognised by the Indian government may upload a vaccination certificate instead of pre-travel test result as part of online self-declaration form.</p>",
            "isRequired": "No",
            "referenceLink": "https://www.mohfw.gov.in/",
            "acceptedCertificates": [
                "Not Specified",
                " Vietnam certificate"
            ],
            "qualifiedVaccines": [
                "Pfizer - 15 days after second dose.",
                "AstraZeneca (Vaxzevria) - 15 days after second dose.",
                "Vaxevria (South Korea) - 15 days after second dose.",
                "Covishield (India) - 15 days after second dose.",
                "Johnson & Johnson - 15 days after first dose.",
                "Sinopharm (Beijing) - 15 days after second dose.",
                "CoronaVac - 15 days after second dose.",
                "Moderna - 15 days after second dose.",
                "Sputnik V - 15 days after second dose.",
                "CanSinoBIO - 15 days after first dose.",
                "EpiVacCorona - 15 days after second dose.",
                "Covaxin - 15 days after second dose.",
                "Nuvaxovid (Novavax) - 15 days after second dose.",
                "CureVac - 15 days after second dose.",
                "Soberana 02 - 15 days after second dose.",
                "AstraZeneca (Brazil) - 15 days after second dose.",
                "AstraZeneca (Russia) - 15 days after second dose.",
                "KoviVac - 15 days after second dose.",
                "Sputnik Light - 15 days after first dose.",
                "QazVac - 15 days after second dose.",
                "Covovax (Novavax) - 15 days after second dose.",
                "COVIran Barekat - 15 days after second dose.",
                "COVAX-19 - 15 days after second dose.",
                "ZyCoV-D - 15 days after second dose."
            ],
            "policy": "Yes",
            "exemptions": "Testing"
        }
    },
    "areaPolicy": {
        "date": "2022-05-17",
        "text": "<p>Mask mandate and social distancing measures are in effect until further notice. Authorities no longer issue nationwide restrictions, but localised containment measures may be imposed in some states.</p>",
        "status": "Distancing",
        "startDate": "2020-03-22",
        "endDate": "indef",
        "referenceLink": "https://www.mygov.in/covid-19/"
    },
    "relatedArea": [
        {
            "methods": [
                "GET"
            ],
            "rel": "Parent"
        }
    ],
    "areaVaccinated": [
        {
            "date": "2022-05-24",
            "vaccinationDoseStatus": "oneDose",
            "percentage": 73.076
        },
        {
            "date": "2022-05-30",
            "vaccinationDoseStatus": "fully",
            "percentage": 63.71
        }
    ],
    "type": "covid19-area-report"
}