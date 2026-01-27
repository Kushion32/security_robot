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

class Propulsion {
  constructor(initObj={}) {
    if (initObj === null) {
      // initObj === null is a special case for deserialization where we don't initialize fields
      this.header = null;
      this.wheel_motor_status = null;
      this.wheel_motor_current_A0pk = null;
      this.wheel_motor_speed_rps = null;
      this.wheel_motor_position_rad = null;
      this.linear_motor_status = null;
      this.linear_motor_current_A0pk = null;
      this.linear_motor_speed_rps = null;
      this.linear_motor_position_rad = null;
    }
    else {
      if (initObj.hasOwnProperty('header')) {
        this.header = initObj.header
      }
      else {
        this.header = new std_msgs.msg.Header();
      }
      if (initObj.hasOwnProperty('wheel_motor_status')) {
        this.wheel_motor_status = initObj.wheel_motor_status
      }
      else {
        this.wheel_motor_status = [];
      }
      if (initObj.hasOwnProperty('wheel_motor_current_A0pk')) {
        this.wheel_motor_current_A0pk = initObj.wheel_motor_current_A0pk
      }
      else {
        this.wheel_motor_current_A0pk = [];
      }
      if (initObj.hasOwnProperty('wheel_motor_speed_rps')) {
        this.wheel_motor_speed_rps = initObj.wheel_motor_speed_rps
      }
      else {
        this.wheel_motor_speed_rps = [];
      }
      if (initObj.hasOwnProperty('wheel_motor_position_rad')) {
        this.wheel_motor_position_rad = initObj.wheel_motor_position_rad
      }
      else {
        this.wheel_motor_position_rad = [];
      }
      if (initObj.hasOwnProperty('linear_motor_status')) {
        this.linear_motor_status = initObj.linear_motor_status
      }
      else {
        this.linear_motor_status = 0;
      }
      if (initObj.hasOwnProperty('linear_motor_current_A0pk')) {
        this.linear_motor_current_A0pk = initObj.linear_motor_current_A0pk
      }
      else {
        this.linear_motor_current_A0pk = 0.0;
      }
      if (initObj.hasOwnProperty('linear_motor_speed_rps')) {
        this.linear_motor_speed_rps = initObj.linear_motor_speed_rps
      }
      else {
        this.linear_motor_speed_rps = 0.0;
      }
      if (initObj.hasOwnProperty('linear_motor_position_rad')) {
        this.linear_motor_position_rad = initObj.linear_motor_position_rad
      }
      else {
        this.linear_motor_position_rad = 0.0;
      }
    }
  }

  static serialize(obj, buffer, bufferOffset) {
    // Serializes a message object of type Propulsion
    // Serialize message field [header]
    bufferOffset = std_msgs.msg.Header.serialize(obj.header, buffer, bufferOffset);
    // Serialize message field [wheel_motor_status]
    bufferOffset = _arraySerializer.uint32(obj.wheel_motor_status, buffer, bufferOffset, null);
    // Serialize message field [wheel_motor_current_A0pk]
    bufferOffset = _arraySerializer.float32(obj.wheel_motor_current_A0pk, buffer, bufferOffset, null);
    // Serialize message field [wheel_motor_speed_rps]
    bufferOffset = _arraySerializer.float32(obj.wheel_motor_speed_rps, buffer, bufferOffset, null);
    // Serialize message field [wheel_motor_position_rad]
    bufferOffset = _arraySerializer.float32(obj.wheel_motor_position_rad, buffer, bufferOffset, null);
    // Serialize message field [linear_motor_status]
    bufferOffset = _serializer.uint32(obj.linear_motor_status, buffer, bufferOffset);
    // Serialize message field [linear_motor_current_A0pk]
    bufferOffset = _serializer.float32(obj.linear_motor_current_A0pk, buffer, bufferOffset);
    // Serialize message field [linear_motor_speed_rps]
    bufferOffset = _serializer.float32(obj.linear_motor_speed_rps, buffer, bufferOffset);
    // Serialize message field [linear_motor_position_rad]
    bufferOffset = _serializer.float32(obj.linear_motor_position_rad, buffer, bufferOffset);
    return bufferOffset;
  }

  static deserialize(buffer, bufferOffset=[0]) {
    //deserializes a message object of type Propulsion
    let len;
    let data = new Propulsion(null);
    // Deserialize message field [header]
    data.header = std_msgs.msg.Header.deserialize(buffer, bufferOffset);
    // Deserialize message field [wheel_motor_status]
    data.wheel_motor_status = _arrayDeserializer.uint32(buffer, bufferOffset, null)
    // Deserialize message field [wheel_motor_current_A0pk]
    data.wheel_motor_current_A0pk = _arrayDeserializer.float32(buffer, bufferOffset, null)
    // Deserialize message field [wheel_motor_speed_rps]
    data.wheel_motor_speed_rps = _arrayDeserializer.float32(buffer, bufferOffset, null)
    // Deserialize message field [wheel_motor_position_rad]
    data.wheel_motor_position_rad = _arrayDeserializer.float32(buffer, bufferOffset, null)
    // Deserialize message field [linear_motor_status]
    data.linear_motor_status = _deserializer.uint32(buffer, bufferOffset);
    // Deserialize message field [linear_motor_current_A0pk]
    data.linear_motor_current_A0pk = _deserializer.float32(buffer, bufferOffset);
    // Deserialize message field [linear_motor_speed_rps]
    data.linear_motor_speed_rps = _deserializer.float32(buffer, bufferOffset);
    // Deserialize message field [linear_motor_position_rad]
    data.linear_motor_position_rad = _deserializer.float32(buffer, bufferOffset);
    return data;
  }

  static getMessageSize(object) {
    let length = 0;
    length += std_msgs.msg.Header.getMessageSize(object.header);
    length += 4 * object.wheel_motor_status.length;
    length += 4 * object.wheel_motor_current_A0pk.length;
    length += 4 * object.wheel_motor_speed_rps.length;
    length += 4 * object.wheel_motor_position_rad.length;
    return length + 32;
  }

  static datatype() {
    // Returns string type for a message object
    return 'movo_msgs/Propulsion';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '61491c2b54c7a9e181eff35f997fd6b8';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    Header header
    uint32[] wheel_motor_status
    float32[] wheel_motor_current_A0pk
    float32[] wheel_motor_speed_rps
    float32[] wheel_motor_position_rad
    uint32 linear_motor_status
    float32 linear_motor_current_A0pk
    float32 linear_motor_speed_rps
    float32 linear_motor_position_rad
     
    
    
    
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
    const resolved = new Propulsion(null);
    if (msg.header !== undefined) {
      resolved.header = std_msgs.msg.Header.Resolve(msg.header)
    }
    else {
      resolved.header = new std_msgs.msg.Header()
    }

    if (msg.wheel_motor_status !== undefined) {
      resolved.wheel_motor_status = msg.wheel_motor_status;
    }
    else {
      resolved.wheel_motor_status = []
    }

    if (msg.wheel_motor_current_A0pk !== undefined) {
      resolved.wheel_motor_current_A0pk = msg.wheel_motor_current_A0pk;
    }
    else {
      resolved.wheel_motor_current_A0pk = []
    }

    if (msg.wheel_motor_speed_rps !== undefined) {
      resolved.wheel_motor_speed_rps = msg.wheel_motor_speed_rps;
    }
    else {
      resolved.wheel_motor_speed_rps = []
    }

    if (msg.wheel_motor_position_rad !== undefined) {
      resolved.wheel_motor_position_rad = msg.wheel_motor_position_rad;
    }
    else {
      resolved.wheel_motor_position_rad = []
    }

    if (msg.linear_motor_status !== undefined) {
      resolved.linear_motor_status = msg.linear_motor_status;
    }
    else {
      resolved.linear_motor_status = 0
    }

    if (msg.linear_motor_current_A0pk !== undefined) {
      resolved.linear_motor_current_A0pk = msg.linear_motor_current_A0pk;
    }
    else {
      resolved.linear_motor_current_A0pk = 0.0
    }

    if (msg.linear_motor_speed_rps !== undefined) {
      resolved.linear_motor_speed_rps = msg.linear_motor_speed_rps;
    }
    else {
      resolved.linear_motor_speed_rps = 0.0
    }

    if (msg.linear_motor_position_rad !== undefined) {
      resolved.linear_motor_position_rad = msg.linear_motor_position_rad;
    }
    else {
      resolved.linear_motor_position_rad = 0.0
    }

    return resolved;
    }
};

module.exports = Propulsion;
