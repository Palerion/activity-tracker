# activity-tracker
A productivity analytics tool that monitors periods of inactivity and activity base on the presence or absence of user input.

#Installation Guide
Installation is currently quite simple.

1. Clone this repository to a local directory on your machine.
2. Navigate to the cloned project's root directory via command terminal.
3. Enter and send the command "npm install".
4. Enter and send the comand "npm start".

This should launch the application.

#Usage
Activity tracker collects and displays data about your activity and inactivity on the system based on the presence or absence of inputs from your keyboard and/or mouse.
Activity monitoring and data collection begins when the "Begin Recording" button is pressed, and ends when the "Stop Recording" button is pressed.
Pressing the "Stop Recording" button will produce a pie chart showing how much time (in milliseconds) was recorded as inactive and how much time (in milliseconds) was reported as active.

#Known Issues
The project is currently in an unfinished state. Known issues are listed below:
1. Activity is only recorded when the application window is in focus. This is a result of JavaScript limiting scope to the application window for security reasons. This can be circumvented with hooks (i.e. iohook) but difficulties were encountered while attempting this implementation. This will hopefully be fixed in a future update.
2. Attempting to start a new recording session after having already started and stopped a recording session will not work. I would like to fix this in a future update.

#Planned Features
1. Multiple data display options that can be enabled and disabled by the user at will.
2. Option to record and display applications used and time spent on each.
