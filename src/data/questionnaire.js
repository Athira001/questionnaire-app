export const questionnaireData = {
  "questionnaire": {
    "id": 40,
    "identifier": "ewBzTS",
    "name": "Personal Liability Insurance",
    "questions": [
      {
        "question_type": "multiple choice",
        "identifier": "list_12110962",
        "headline": "Who do you want to insure?",
        "description": null,
        "required": false,
        "multiple": "false",
        "choices": [
          {
            "label": "My family with children",
            "value": "My family with children",
            "selected": false
          },
          {
            "label": "My family without children",
            "value": "My family without children",
            "selected": false
          },
          {
            "label": "Me without a child",
            "value": "Me without a child",
            "selected": false
          },
          {
            "label": "Me with kid",
            "value": "Me with child",
            "selected": false
          },
          {
            "label": "Me and my partner",
            "value": "Me and my partner",
            "selected": false
          }
        ],
        "jumps": []
      },
      {
        "question_type": "multiple choice",
        "identifier": "list_12111610",
        "headline": "Are you a civil servant or a public servant?",
        "description": null,
        "required": false,
        "multiple": "false",
        "choices": [
          {
            "label": "Yes",
            "value": "Yes",
            "selected": false
          },
          {
            "label": "No",
            "value": "No",
            "selected": false
          }
        ],
        "jumps": []
      },
      {
        "question_type": "multiple choice",
        "identifier": "list_12111777",
        "headline": "Would you like to secure bad debt insurance?",
        "description": null,
        "required": false,
        "multiple": "false",
        "choices": [
          {
            "label": "Yes",
            "value": "Yes",
            "selected": false
          },
          {
            "label": "No",
            "value": "No",
            "selected": false
          }
        ],
        "jumps": []
      },
      {
        "question_type": "multiple choice",
        "identifier": "list_12110966",
        "headline": "How important is it to you to protect yourself against damage to rented property?",
        "description": null,
        "required": false,
        "multiple": "false",
        "choices": [
          {
            "label": "Important",
            "value": "Important",
            "selected": false
          },
          {
            "label": "Unimportant",
            "value": "Not important",
            "selected": false
          }
        ],
        "jumps": []
      },
      {
        "question_type": "multiple choice",
        "identifier": "list_12110967",
        "headline": "Do you own one or more properties?",
        "description": null,
        "required": false,
        "multiple": "false",
        "choices": [
          {
            "label": "Yes",
            "value": "Yes",
            "selected": false
          },
          {
            "label": "No",
            "value": "No",
            "selected": false
          }
        ],
        "jumps": [
          {
            "conditions": [
              {
                "field": "list_12110967",
                "value": "Yes"
              }
            ],
            "destination": {
              "id": "list_12110968"
            }
          },
          {
            "conditions": [
              {
                "field": "list_12110967",
                "value": "No"
              }
            ],
            "destination": {
              "id": "list_12111854"
            }
          }
        ]
      },
      {
        "question_type": "multiple choice",
        "identifier": "list_12110968",
        "headline": "Do you own a property you live in?",
        "description": null,
        "required": false,
        "multiple": "false",
        "choices": [
          {
            "label": "Yes, domestic",
            "value": "Yes, domestically",
            "selected": false
          },
          {
            "label": "Yes, abroad",
            "value": "Yes, abroad",
            "selected": false
          },
          {
            "label": "Yes, domestically and internationally",
            "value": "Yes, domestically and internationally",
            "selected": false
          },
          {
            "label": "No",
            "value": "No",
            "selected": false
          }
        ],
        "jumps": []
      },
      {
        "question_type": "multiple choice",
        "identifier": "list_13907264",
        "headline": "Do you have one or more rented properties?",
        "description": null,
        "required": false,
        "multiple": "false",
        "choices": [
          {
            "label": "Yes, domestic",
            "value": "Yes, domestically",
            "selected": false
          },
          {
            "label": "Yes, abroad",
            "value": "Yes, abroad",
            "selected": false
          },
          {
            "label": "Yes, domestically and internationally",
            "value": "Yes, domestically and internationally",
            "selected": false
          },
          {
            "label": "No",
            "value": "No",
            "selected": false
          }
        ],
        "jumps": []
      },
      {
        "question_type": "multiple choice",
        "identifier": "list_12111854",
        "headline": "Would you like to build or remodel something in the near future?",
        "description": null,
        "required": false,
        "multiple": "false",
        "choices": [
          {
            "label": "Yes",
            "value": "Yes",
            "selected": false
          },
          {
            "label": "No",
            "value": "No",
            "selected": false
          }
        ],
        "jumps": []
      },
      {
        "question_type": "multiple choice",
        "identifier": "list_12110972",
        "headline": "How important is it to you to protect yourself against losing your keys at work?",
        "description": null,
        "required": false,
        "multiple": "false",
        "choices": [
          {
            "label": "Important",
            "value": "Important",
            "selected": false
          },
          {
            "label": "Unimportant",
            "value": "Not important",
            "selected": false
          }
        ],
        "jumps": []
      },
      {
        "question_type": "multiple choice",
        "identifier": "list_13913438",
        "headline": "Would you like to secure the loss of private keys?",
        "description": null,
        "required": false,
        "multiple": "false",
        "choices": [
          {
            "label": "Yes",
            "value": "Yes",
            "selected": false
          },
          {
            "label": "No",
            "value": "No",
            "selected": false
          }
        ],
        "jumps": []
      },
      {
        "question_type": "multiple choice",
        "identifier": "list_12110969",
        "headline": "Would you like to be insured abroad?",
        "description": null,
        "required": false,
        "multiple": "false",
        "choices": [
          {
            "label": "Yes, up to a month",
            "value": "Yes, up to a month",
            "selected": false
          },
          {
            "label": "Yes, several months",
            "value": "Yes, several months",
            "selected": false
          },
          {
            "label": "No",
            "value": "No",
            "selected": false
          }
        ],
        "jumps": []
      },
      {
        "question_type": "multiple choice",
        "identifier": "list_12110970",
        "headline": "Do you have a sailboat?",
        "description": null,
        "required": false,
        "multiple": "false",
        "choices": [
          {
            "label": "Up to 4 m²",
            "value": "Up to 4 m²",
            "selected": false
          },
          {
            "label": "Up to 10 m²",
            "value": "Up to 10 m²",
            "selected": false
          },
          {
            "label": "Up to 15 m²",
            "value": "Up to 15 m²",
            "selected": false
          },
          {
            "label": "Up to 25 m²",
            "value": "Up to 25 m²",
            "selected": false
          },
          {
            "label": "No",
            "value": "No",
            "selected": false
          }
        ],
        "jumps": []
      },
      {
        "question_type": "multiple choice",
        "identifier": "list_12110971",
        "headline": "Do you have a motor boat?",
        "description": null,
        "required": false,
        "multiple": "false",
        "choices": [
          {
            "label": "Up to 5 hp",
            "value": "Up to 5 hp",
            "selected": false
          },
          {
            "label": "Up to 10 hp",
            "value": "Up to 10 hp",
            "selected": false
          },
          {
            "label": "Up to 15 hp",
            "value": "Up to 15 hp",
            "selected": false
          },
          {
            "label": "Unlimited HP",
            "value": "Unlimited HP",
            "selected": false
          },
          {
            "label": "No",
            "value": "No",
            "selected": false
          }
        ],
        "jumps": []
      },
      {
        "question_type": "multiple choice",
        "identifier": "list_12110965",
        "headline": "Would you like to pay part of the damage yourself?",
        "description": null,
        "required": false,
        "multiple": "false",
        "choices": [
          {
            "label": "No",
            "value": "No",
            "selected": false
          },
          {
            "label": "Yes, up to 150 euros",
            "value": "Yes, up to 150 euros",
            "selected": false
          }
        ],
        "jumps": []
      },
      {
        "question_type": "multiple choice",
        "identifier": "list_12111717",
        "headline": "Do you currently have personal liability insurance?",
        "description": null,
        "required": false,
        "multiple": "false",
        "choices": [
          {
            "label": "Yes",
            "value": "Yes",
            "selected": false
          },
          {
            "label": "No",
            "value": "No",
            "selected": false
          }
        ],
        "jumps": [
          {
            "conditions": [
              {
                "field": "list_12111717",
                "value": "Yes"
              }
            ],
            "destination": {
              "id": "list_12111755"
            }
          },
          {
            "conditions": [
              {
                "field": "list_12111717",
                "value": "No"
              }
            ],
            "destination": {
              "id": "date_22039590"
            }
          }
        ]
      },
      {
        "question_type": "multiple choice",
        "identifier": "list_12111755",
        "headline": "How many liability claims have you had in the last 5 years?",
        "description": null,
        "required": false,
        "multiple": "false",
        "choices": [
          {
            "label": "None",
            "value": "None",
            "selected": false
          },
          {
            "label": "1",
            "value": "1",
            "selected": false
          },
          {
            "label": "2",
            "value": "2",
            "selected": false
          },
          {
            "label": "3",
            "value": "3",
            "selected": false
          },
          {
            "label": "More than 3",
            "value": "More than 3",
            "selected": false
          }
        ],
        "jumps": []
      },
      {
        "question_type": "text",
        "identifier": "date_22039590",
        "headline": "What would be your preferred date for the start of personal liability insurance?",
        "description": null,
        "required": false,
        "multiline": "false",
        "jumps": []
      },
      {
        "question_type": "text-area",
        "identifier": "textarea_12110979",
        "headline": "Do you have any additional information or comments for us?",
        "description": null,
        "required": false,
        "multiline": "true",
        "jumps": []
      },
      {
        "question_type": "email",
        "identifier": "email_123",
        "headline": "Please provide your Email Id",
        "description": null,
        "required": true,
        "multiline": "false",
        "jumps": []
      }
    ],
    "description": "In order to create your personal private liability insurance offer, we need some information from you.",
    "category_name_hyphenated": "Pri\u0026shy;vat\u0026shy;liability\u0026shy;duty"
  }
}

