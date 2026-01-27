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

class ConfigCmd {
  constructor(initObj={}) {
    if (initObj === null) {
      // initObj === null is a special case for deserialization where we don't initialize fields
      this.header = null;
      this.gp_cmd = null;
      this.gp_param = null;
    }
    else {
      if (initObj.hasOwnProperty('header')) {
        this.header = initObj.header
      }
      else {
        this.header = new std_msgs.msg.Header();
      }
      if (initObj.hasOwnProperty('gp_cmd')) {
        this.gp_cmd = initObj.gp_cmd
      }
      else {
        this.gp_cmd = '';
      }
      if (initObj.hasOwnProperty('gp_param')) {
        this.gp_param = initObj.gp_param
      }
      else {
        this.gp_param = 0;
      }
    }
  }

  static serialize(obj, buffer, bufferOffset) {
    // Serializes a message object of type ConfigCmd
    // Serialize message field [header]
    bufferOffset = std_msgs.msg.Header.serialize(obj.header, buffer, bufferOffset);
    // Serialize message field [gp_cmd]
    bufferOffset = _serializer.string(obj.gp_cmd, buffer, bufferOffset);
    // Serialize message field [gp_param]
    bufferOffset = _serializer.uint32(obj.gp_param, buffer, bufferOffset);
    return bufferOffset;
  }

  static deserialize(buffer, bufferOffset=[0]) {
    //deserializes a message object of type ConfigCmd
    let len;
    let data = new ConfigCmd(null);
    // Deserialize message field [header]
    data.header = std_msgs.msg.Header.deserialize(buffer, bufferOffset);
    // Deserialize message field [gp_cmd]
    data.gp_cmd = _deserializer.string(buffer, bufferOffset);
    // Deserialize message field [gp_param]
    data.gp_param = _deserializer.uint32(buffer, bufferOffset);
    return data;
  }

  static getMessageSize(object) {
    let length = 0;
    length += std_msgs.msg.Header.getMessageSize(object.header);
    length += _getByteLength(object.gp_cmd);
    return length + 8;
  }

  static datatype() {
    // Returns string type for a message object
    return 'movo_msgs/ConfigCmd';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '48e0d9e9ce5afb7e797ea6a1ab30254b';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    Header header
    string gp_cmd
    uint32 gp_param
    
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
    const resolved = new ConfigCmd(null);
    if (msg.header !== undefined) {
      resolved.header = std_msgs.msg.Header.Resolve(msg.header)
    }
    else {
      resolved.header = new std_msgs.msg.Header()
    }

    if (msg.gp_cmd !== undefined) {
      resolved.gp_cmd = msg.gp_cmd;
    }
    else {
      resolved.gp_cmd = ''
    }

    if (msg.gp_param !== undefined) {
      resolved.gp_param = msg.gp_param;
    }
    else {
      resolved.gp_param = 0
    }

    return resolved;
    }
};

module.exports = ConfigCmd;
