

 implement a 2-step single page application, which contains some custom forms. Fields in this forms will consist of required passenger data.

In the application there will be two different steps, one for adding primary passengers data and other for adding secondary passengers (Family) data. Primary passenger is the leading one, we need a lot of data about him. Secondary passenger requires less, but should be able to include several passengers data at once.


## The 1st step gathers DATA ABOUT PRIMARY PASSENGER

Full Name

Age

Email

Address (Country select  + Street + Index/Zip)

Phone Number


## The 2nd step will contain DATA ABOUT SECONDARY PASSENGER(S)

Full Name

Age

Add one more passenger button / Remove passenger (only if there is several forms)


# Requirements:

1. Steps should contain form/step validation (not supposed to submit empty forms or invalid email etc.)

2. Every step should have a navigation capability, which submits a form on every step (ability to move backwards and forwards f.e “back” / “next”)

3. The second step should have the ability to add and remove secondary passengers dynamically. Can be submitted with one passenger as with several passengers, all fields should be simply validated though (f.e. age should be a number).

4. After submitting the second step notify the user with success message.


