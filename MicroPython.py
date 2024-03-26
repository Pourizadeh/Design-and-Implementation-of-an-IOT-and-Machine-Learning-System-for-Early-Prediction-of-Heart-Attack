#MicroPython for taking the data( Heart Pulse ) from the sensor 
#By: Zahra Pourizadeh

from machine import ADC
import time
#ADC: Analog to Digital Conversion

#Pin to which the heart sensor is connected:
heartSensorPin1 = 32
heartSensorPin2 = 33
heartSensorPin3 = 34

#Initialize ADC
adc = ADC()

def setup():
    #Initialize serial communication
    uart = UART(0, baudrate=9600, tx=0, rx=1)
    time.sleep(2)  # Allow time for serial to initialize

def loop():
    #Read heartbeat data from the sensor
    heartbeat1 = adc.channel(pin='P' + str(heartSensorPin1)).value()
    heartbeat2 = adc.channel(pin='P' + str(heartSensorPin2)).value()
    heartbeat3 = adc.channel(pin='P' + str(heartSensorPin3)).value()

    #Get current timestamp (in seconds)
    timestamp = time.time()

    #Create JSON-like object
    data = '{{"Key": {}, "Value1": {}, "Value2": {}, "Value3": {}}}'.format(timestamp, heartbeat1, heartbeat2, heartbeat3)

    #Send data over serial
    uart.write(data + '\n')

    #Delay for a moment (adjust as needed)
    time.sleep(1)

setup()
while True:
    loop()
