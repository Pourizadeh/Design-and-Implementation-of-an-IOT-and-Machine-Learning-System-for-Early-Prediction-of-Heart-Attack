// Arduino sketch for connected Heart Pulse sensor
// The sketch takes the data from the sensor and show them in real-time
// By: Zahra Pourizadeh

#include <Wire.h>
#include <RTC.h>  // real-time clock (RTC) for timestamping

// Pin to which the heart sensor is connected
const int heartSensorPin1 = A0;
const int heartSensorPin2 = A1;
const int heartSensorPin3 = A2;

void setup() {
  Serial.begin(9600);
  // Initialize RTC
}
void loop() {
  // Read heartbeat data from the sensor
  int heartbeat = analogRead(heartSensorPin);

  // Get current timestamp from RTC
  unsigned long timestamp = RTC.getTimestamp();

  // Create JSON object
  Serial.print("{");
  Serial.print("\"Key\": ");
  Serial.print(timestamp);
  Serial.print(", \"Value\": ");
  Serial.print(heartbeat);
  Serial.println("}");

  // Delay for a moment (adjust as needed)
  delay(1000);
}


