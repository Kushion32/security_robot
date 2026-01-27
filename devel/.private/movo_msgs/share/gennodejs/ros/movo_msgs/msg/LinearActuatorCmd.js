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

class LinearActuatorCmd {
  constructor(initObj={}) {
    if (initObj === null) {
      // initObj === null is a special case for deserialization where we don't initialize fields
      this.header = null;
      this.desired_position_m = null;
      this.fdfwd_vel_mps = null;
    }
    else {
      if (initObj.hasOwnProperty('header')) {
        this.header = initObj.header
      }
      else {
        this.header = new std_msgs.msg.Header();
      }
      if (initObj.hasOwnProperty('desired_position_m')) {
        this.desired_position_m = initObj.desired_position_m
      }
      else {
        this.desired_position_m = 0.0;
      }
      if (initObj.hasOwnProperty('fdfwd_vel_mps')) {
        this.fdfwd_vel_mps = initObj.fdfwd_vel_mps
      }
      else {
        this.fdfwd_vel_mps = 0.0;
      }
    }
  }

  static serialize(obj, buffer, bufferOffset) {
    // Serializes a message object of type LinearActuatorCmd
    // Serialize message field [header]
    bufferOffset = std_msgs.msg.Header.serialize(obj.header, buffer, bufferOffset);
    // Serialize message field [desired_position_m]
    bufferOffset = _serializer.float32(obj.desired_position_m, buffer, bufferOffset);
    // Serialize message field [fdfwd_vel_mps]
    bufferOffset = _serializer.float32(obj.fdfwd_vel_mps, buffer, bufferOffset);
    return bufferOffset;
  }

  static deserialize(buffer, bufferOffset=[0]) {
    //deserializes a message object of type LinearActuatorCmd
    let len;
    let data = new LinearActuatorCmd(null);
    // Deserialize message field [header]
    data.header = std_msgs.msg.Header.deserialize(buffer, bufferOffset);
    // Deserialize message field [desired_position_m]
    data.desired_position_m = _deserializer.float32(buffer, bufferOffset);
    // Deserialize message field [fdfwd_vel_mps]
    data.fdfwd_vel_mps = _deserializer.float32(buffer, bufferOffset);
    return data;
  }

  static getMessageSize(object) {
    let length = 0;
    length += std_msgs.msg.Header.getMessageSize(object.header);
    return length + 8;
  }

  static datatype() {
    // Returns string type for a message object
    return 'movo_msgs/LinearActuatorCmd';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'e09ee2452a894d4a26ff82f8c1b80e6a';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    Header header
    float32 desired_position_m
    float32 fdfwd_vel_mps
    
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
    const resolved = new LinearActuatorCmd(null);
    if (msg.header !== undefined) {
      resolved.header = std_msgs.msg.Header.Resolve(msg.header)
    }
    else {
      resolved.header = new std_msgs.msg.Header()
    }

    if (msg.desired_position_m !== undefined) {
      resolved.desired_position_m = msg.desired_position_m;
    }
    else {
      resolved.desired_position_m = 0.0
    }

    if (msg.fdfwd_vel_mps !== undefined) {
      resolved.fdfwd_vel_mps = msg.fdfwd_vel_mps;
    }
    else {
      resolved.fdfwd_vel_mps = 0.0
    }

    return resolved;
    }
};

module.exports = LinearActuatorCmd;
