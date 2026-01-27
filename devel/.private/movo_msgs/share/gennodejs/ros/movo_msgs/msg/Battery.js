// Auto-generated. Do not edit!

// (in-package movo_msgs.msg)


"use strict";

const _serializer = _ros_msg_utils.Serialize;
const _arraySerializer = _serializer.Array;
const _deserializer = _ros_msg_utils.Deserialize;
const _arrayDeserializer = _deserializer.Array;
const _finder = _ros_msg_utils.Find;
const _getByteLength = _ros_msg_utils.getByteLength;
let std_msgs = _finder('std_msgs');

//-----------------------------------------------------------

class Battery {
  constructor(initObj={}) {
    if (initObj === null) {
      // initObj === null is a special case for deserialization where we don't initialize fields
      this.header = null;
      this.battery_status = null;
      this.battery_soc = null;
      this.battery_voltage_VDC = null;
      this.battery_current_A0pk = null;
      this.battery_temperature_degC = null;
    }
    else {
      if (initObj.hasOwnProperty('header')) {
        this.header = initObj.header
      }
      else {
        this.header = new std_msgs.msg.Header();
      }
      if (initObj.hasOwnProperty('battery_status')) {
        this.battery_status = initObj.battery_status
      }
      else {
        this.battery_status = 0;
      }
      if (initObj.hasOwnProperty('battery_soc')) {
        this.battery_soc = initObj.battery_soc
      }
      else {
        this.battery_soc = 0.0;
      }
      if (initObj.hasOwnProperty('battery_voltage_VDC')) {
        this.battery_voltage_VDC = initObj.battery_voltage_VDC
      }
      else {
        this.battery_voltage_VDC = 0.0;
      }
      if (initObj.hasOwnProperty('battery_current_A0pk')) {
        this.battery_current_A0pk = initObj.battery_current_A0pk
      }
      else {
        this.battery_current_A0pk = 0.0;
      }
      if (initObj.hasOwnProperty('battery_temperature_degC')) {
        this.battery_temperature_degC = initObj.battery_temperature_degC
      }
      else {
        this.battery_temperature_degC = 0.0;
      }
    }
  }

  static serialize(obj, buffer, bufferOffset) {
    // Serializes a message object of type Battery
    // Serialize message field [header]
    bufferOffset = std_msgs.msg.Header.serialize(obj.header, buffer, bufferOffset);
    // Serialize message field [battery_status]
    bufferOffset = _serializer.uint32(obj.battery_status, buffer, bufferOffset);
    // Serialize message field [battery_soc]
    bufferOffset = _serializer.float32(obj.battery_soc, buffer, bufferOffset);
    // Serialize message field [battery_voltage_VDC]
    bufferOffset = _serializer.float32(obj.battery_voltage_VDC, buffer, bufferOffset);
    // Serialize message field [battery_current_A0pk]
    bufferOffset = _serializer.float32(obj.battery_current_A0pk, buffer, bufferOffset);
    // Serialize message field [battery_temperature_degC]
    bufferOffset = _serializer.float32(obj.battery_temperature_degC, buffer, bufferOffset);
    return bufferOffset;
  }

  static deserialize(buffer, bufferOffset=[0]) {
    //deserializes a message object of type Battery
    let len;
    let data = new Battery(null);
    // Deserialize message field [header]
    data.header = std_msgs.msg.Header.deserialize(buffer, bufferOffset);
    // Deserialize message field [battery_status]
    data.battery_status = _deserializer.uint32(buffer, bufferOffset);
    // Deserialize message field [battery_soc]
    data.battery_soc = _deserializer.float32(buffer, bufferOffset);
    // Deserialize message field [battery_voltage_VDC]
    data.battery_voltage_VDC = _deserializer.float32(buffer, bufferOffset);
    // Deserialize message field [battery_current_A0pk]
    data.battery_current_A0pk = _deserializer.float32(buffer, bufferOffset);
    // Deserialize message field [battery_temperature_degC]
    data.battery_temperature_degC = _deserializer.float32(buffer, bufferOffset);
    return data;
  }

  static getMessageSize(object) {
    let length = 0;
    length += std_msgs.msg.Header.getMessageSize(object.header);
    return length + 20;
  }

  static datatype() {
    // Returns string type for a message object
    return 'movo_msgs/Battery';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '85435c1f3cc5833c716f70d9ef5261a7';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    Header header
    uint32  battery_status
    float32 battery_soc
    float32 battery_voltage_VDC
    float32 battery_current_A0pk
    float32 battery_temperature_degC
    
    ================================================================================
    MSG: std_msgs/Header
    # Standard metadata for higher-level stamped data types.
    # This is generally used to communicate timestamped data 
    # in a particular coordinate frame.
    # 
    # sequence ID: consecutively increasing ID 
    uint32 seq
    #Two-integer timestamp that is expressed as:
    # * stamp.sec: seconds (stamp_secs) since epoch (in Python the variable is called 'secs')
    # * stamp.nsec: nanoseconds since stamp_secs (in Python the variable is called 'nsecs')
    # time-handling sugar is provided by the client library
    time stamp
    #Frame this data is associated with
    string frame_id
    
    `;
  }

  static Resolve(msg) {
    // deep-construct a valid message object instance of whatever was passed in
    if (typeof msg !== 'object' || msg === null) {
      msg = {};
    }
    const resolved = new Battery(null);
    if (msg.header !== undefined) {
      resolved.header = std_msgs.msg.Header.Resolve(msg.header)
    }
    else {
      resolved.header = new std_msgs.msg.Header()
    }

    if (msg.battery_status !== undefined) {
      resolved.battery_status = msg.battery_status;
    }
    else {
      resolved.battery_status = 0
    }

    if (msg.battery_soc !== undefined) {
      resolved.battery_soc = msg.battery_soc;
    }
    else {
      resolved.battery_soc = 0.0
    }

    if (msg.battery_voltage_VDC !== undefined) {
      resolved.battery_voltage_VDC = msg.battery_voltage_VDC;
    }
    else {
      resolved.battery_voltage_VDC = 0.0
    }

    if (msg.battery_current_A0pk !== undefined) {
      resolved.battery_current_A0pk = msg.battery_current_A0pk;
    }
    else {
      resolved.battery_current_A0pk = 0.0
    }

    if (msg.battery_temperature_degC !== undefined) {
      resolved.battery_temperature_degC = msg.battery_temperature_degC;
    }
    else {
      resolved.battery_temperature_degC = 0.0
    }

    return resolved;
    }
};

module.exports = Battery;
