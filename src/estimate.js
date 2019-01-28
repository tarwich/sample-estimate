module.exports = {
  "Twitter Application": {
    "rate": 120,
    "text": "This is an estimate of what it would take to make the actual twitter.com application that we're all so familiar with.",
    "children": {
      "Users": {
        "text": "Encompases all user-based concepts",
        "children": {
          "Login": {
            "hours": 4,
            "text": "Allow users to login to the system",
            "children": {
              "Login Form": {
                "text": "The form that allows users to login to the system",
                "children": {
                  "Buttons": {
                    "hours": 1,
                    "text": "A login button and a signup button. Clicking the login button submits the form, whereas clicking the signup button moves to the signup form."
                  },
                  "Fields": {
                    "hours": 1,
                    "text": "A username field and a password field. The password field should cover the input characters with asterisks. The username field should be a regular text field."
                  },
                  "Query": {
                    "hours": 2,
                    "text": "When the login button is clicked, the user information will be sent to the server. The server will hash the password and look for a user record which matches the username and the hashed password. If the user is not found, then it will return an error. If the username or password are missing, then it will return an error. If the username or password are not acceptable values, then it will return user not found."
                  },
                  "Error State": {
                    "hours": 1,
                    "text": "The form should support showing an error message for when the user or password are incorrect."
                  }
                }
              },
              "Signup Form": {
                "text": "A form to allow the user to sign up for the service. This form should allow for displaying an error message.",
                "children": {
                  "Username Field": {
                    "hours": 3,
                    "text": "A simple text field to allow entering in a username. This field should support error states and an error message. When typing in this field, queries should be run in the background to ensure that the specified username is not already taken, and if it is, then an error state should be shown on the form to prevent the user from having to fill out the entire form just to discover that their username is already taken."
                  },
                  "Password Field": {
                    "hours": 2,
                    "text": "This should be a two-field combination that allows entering a password and confirming that password. The fields should support error states and should show an error message as well. Errors should be shown if the password does not meet the minimum requirements, or does not match the confirmation password. If the password field or confirmation fields are blank, then they should not show an error state for not matching -- only for not meeting the minimum requirements."
                  },
                  "Signup Button": {
                    "hours": 1,
                    "text": "This button should be automatically disabled and subdued if the form has any errors on it, or if any required field is left blank. Clicking this button submits the signup information to the server. The server should re-validate the validity of the username and password, and should send back an error if they are invalid. The error should be specific."
                  }
                }
              },
              "Database": {
                "hours": 4,
                "text": "Setup the database to hold user information, password information, handle password reset codes, and hold basic contact information about the user."
              },
              "Reset Password": {
                "text": "A system to allow the user to reset their password should they forget it.",
                "children": {
                  "Request Reset Password Form": {
                    "text": "A form to allow the user to enter their email address in order to have their password reset.",
                    "children": {
                      "Email Field": {
                        "hours": 2,
                        "text": "A simple text field that allows the user to type in their e-mail address. This field should show a validation message if the e-mail address is invalid."
                      },
                      "Submit Button": {
                        "hours": 1,
                        "text": "A button to submit the form. The button should be disabled and subdued, if any part of the form is blank or invalid. When clicked, the button should show a loading state and be disabled until the form is submitted."
                      },
                      "Reset Query": {
                        "hours": 5,
                        "text": "When the reset password form is submitted to the server, the server should check to see if the user is already has a valid reset token. If they do, it should not change that token, as this could be used as an attack vector to prevent a user from ever changing their password.\nIf there is no reset token, then a new one should be generated. This token could have a hash of the date, the e-mail, and the current hashed password of the user.\nThe generated token should be generated and e-mailed to the user, allowing them to reset their password."
                      }
                    }
                  },
                  "Reset Password Form": {
                    "text": "This is the form that allows a user to reset their password. They access this form by clicking a valid reset password link from their e-mail. If the reset password link is invalid or expired, then this form allows them to enter a reset password code e-mailed to them in order to enable the form.",
                    "children": {
                      "Link Processing": {
                        "hours": 1,
                        "text": "The form should automatically process the link information when clicked, consuming the reset token and unlocking the form if the link is valid."
                      },
                      "Token Field": {
                        "hours": 1,
                        "text": "When a user has submitted a reset password request, the reset password form will have a token field for them to type in a confirmation code received in their e-mail."
                      },
                      "Password Fields": {
                        "hours": 2,
                        "text": "The system should show a password and confirm password field. The fields should support error states to show if the passwords do not match, or are not valid. If either field is blank, then the passwords do not need to match."
                      },
                      "Submit Button": {
                        "hours": 1,
                        "text": "A submit button to execute the password reset. When clicked, it should enter a disabled state until the form has been submitted. When any part of the form is blank or invalid, the button should be disabled."
                      },
                      "Success State": {
                        "hours": 2,
                        "text": "When the form has been submitted, it should show a success state informing the user that their password has been successfully reset."
                      },
                      "Query": {
                        "hours": 3,
                        "text": "When the reset password form is submitted, the server should attempt to assign the new password to the user. If any error occures, the error should be returned to the client.\nUpon success, an e-mail should be sent to the user to inform them that their password has been reset."
                      }
                    }
                  }
                }
              }
            }
          },
          "Logout": {
            "hours": 2,
            "text": "Allow users to log back out of the system"
          }
        }
      },
      "Tweets": {
        "text": "The system of posting and viewing messages online",
        "children": {
          "Post Tweet": {
            "children": {
              "Post Tweet Form": {
                "text": "A form that allows a person to submit a tweet",
                "children": {
                  "Message Field": {
                    "hours": 4,
                    "text": "This is the basic message field that allows a person to post a tweet. It should have an error state, and show an error message below it if the are any issues with the content of the field. The field should have a maximum of 1024 charcaters."
                  },
                  "Attachments": {
                    "hours": 6,
                    "text": "Allow a user to insert images into their tweet by pasting the image directly into the message field as well as inserting a link or dragging a file. When an image is pasted into the message field, it will not appear in place, but rather text representing the image will be inserted in place of the image. This makes it easy to manipulate where the image should appear inside the flow of text."
                  },
                  "Mentions": {
                    "hours": 1,
                    "text": "Allow a user to mention or tag another user by specifying their username prefixed with an \"@\" symbol. When a user is typing in the message field, it should autocomplete other usernames after the \"@\" symbol.",
                    "children": {
                      "Detect Mentions": {
                        "hours": 1,
                        "text": "Detect when an @Mention appears in the text so that it can be processed differently than the rest of the message."
                      },
                      "Server Side Processing": {
                        "hours": 4,
                        "text": "Flag another user when they've been mentioned"
                      },
                      "Message Users": {
                        "hours": 3,
                        "text": "Create links in the database between the tweet and the message."
                      },
                      "Autocomplete": {
                        "hours": 4,
                        "text": "Show a popup menu when a mention is started that shows matching users and makes it easier to select a matching user without typos."
                      },
                      "Presentation": {
                        "hours": 2,
                        "text": "Show the mentions in a slightly different Presentation in order to make it easier to see that it is an actual mention."
                      }
                    }
                  },
                  "View Tweet": {
                    "text": "Show posts for a Twitter user",
                    "children": {
                      "Page": {
                        "hours": 3,
                        "text": "Create a page to show the basic user information along with a list of tweets below the user."
                      },
                      "Message": {
                        "hours": 5,
                        "text": "Show a message from a tweet along with any images or mentions specified."
                      },
                      "Hover Mention": {
                        "hours": 2,
                        "text": "When you hover over a mention with the mouse, it should show a popup window with basic information about the mentioned user."
                      },
                      "Click Mention": {
                        "hours": 1,
                        "text": "When you click a mention, it should take you to the Twitter page for that user."
                      },
                      "Hide Tweet": {
                        "hours": 2,
                        "text": "Allow a user to hide a tweet that they've seen from another user. This has no effect on the other user. It simply makes that single tweet appear collapsed and the contents to no longer be visible to the user. The purpose of this feature is for when a user is following someone else, and they find a particular tweet offensive."
                      },
                      "Flag Tweet": {
                        "hours": 5,
                        "text": "Add the ability for a user to flag another tweet as mature, or criminal. This is important for legal regulation and reporting within the system."
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
