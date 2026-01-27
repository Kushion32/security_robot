// Auto-generated. Do not edit!

// (in-package movo_msgs.msg)


"use strict";

const _serializer = _ros_msg_utils.Serialize;
const _arraySerializer = _serializer.Array;
const _deserializer = _ros_msg_utils.Deserialize;
const _arrayDeserializer = _deserializer.Array;
const _finder = _ros_msg_utils.Find;
const _getByteLength = _ros_msg_utils.getByteLength;
let PVA = require('./PVA.js');
let std_msgs = _finder('std_msgs');

//-----------------------------------------------------------

class PanTiltCmd {
  constructor(initObj={}) {
    if (initObj === null) {
      // initObj === null is a special case for deserialization where we don't initialize fields
      this.header = null;
      this.pan_cmd = null;
      this.tilt_cmd = null;
    }
    else {
      if (initObj.hasOwnProperty('header')) {
        this.header = initObj.header
      }
      else {
        this.header = new std_msgs.msg.Header();
      }
      if (initObj.hasOwnProperty('pan_cmd')) {
        this.pan_cmd = initObj.pan_cmd
      }
      else {
        this.pan_cmd = new PVA();
      }
      if (initObj.hasOwnProperty('tilt_cmd')) {
        this.tilt_cmd = initObj.tilt_cmd
      }
      else {
        this.tilt_cmd = new PVA();
      }
    }
  }

  static serialize(obj, buffer, bufferOffset) {
    // Serializes a message object of type PanTiltCmd
    // Serialize message field [header]
    bufferOffset = std_msgs.msg.Header.serialize(obj.header, buffer, bufferOffset);
    // Serialize message field [pan_cmd]
    bufferOffset = PVA.serialize(obj.pan_cmd, buffer, bufferOffset);
    // Serialize message field [tilt_cmd]
    bufferOffset = PVA.serialize(obj.tilt_cmd, buffer, bufferOffset);
    return bufferOffset;
  }

  static deserialize(buffer, bufferOffset=[0]) {
    //deserializes a message object of type PanTiltCmd
    let len;
    let data = new PanTiltCmd(null);
    // Deserialize message field [header]
    data.header = std_msgs.msg.Header.deserialize(buffer, bufferOffset);
    // Deserialize message field [pan_cmd]
    data.pan_cmd = PVA.deserialize(buffer, bufferOffset);
    // Deserialize message field [tilt_cmd]
    data.tilt_cmd = PVA.deserialize(buffer, bufferOffset);
    return data;
  }

  static getMessageSize(object) {
    let length = 0;
    length += std_msgs.msg.Header.getMessageSize(object.header);
    return length + 24;
  }

  static datatype() {
    // Returns string type for a message object
    return 'movo_msgs/PanTiltCmd';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '1c8fd5bfa9f9bb5673655828791c82ce';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    Header header
    PVA pan_cmd
    PVA tilt_cmd
    
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
    
    ================================================================================
    MSG: movo_msgs/PVA
    float32 pos_rad
    float32 vel_rps
    float32 acc_rps2
    
    `;
  }

  static Resolve(msg) {
    // deep-construct a valid message object instance of whatever was passed in
    if (typeof msg !== 'object' || msg === null) {
      msg = {};
    }
    const resolved = new PanTiltCmd(null);
    if (msg.header !== undefined) {
      resolved.header = std_msgs.msg.Header.Resolve(msg.header)
    }
    else {
      resolved.header = new std_msgs.msg.Header()
    }

    if (msg.pan_cmd !== undefined) {
      resolved.pan_cmd = PVA.Resolve(msg.pan_cmd)
    }
    else {
      resolved.pan_cmd = new PVA()
    }

    if (msg.tilt_cmd !== undefined) {
      resolved.tilt_cmd = PVA.Resolve(msg.tilt_cmd)
    }
    else {
      resolved.tilt_cmd = new PVA()
    }

    return resolved;
    }
};

module.exports = PanTiltCmd;
