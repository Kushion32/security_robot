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

class JacoJointCmd {
  constructor(initObj={}) {
    if (initObj === null) {
      // initObj === null is a special case for deserialization where we don't initialize fields
      this.header = null;
      this.command_type = null;
      this.joint_cmds = null;
      this.vel_limits = null;
    }
    else {
      if (initObj.hasOwnProperty('header')) {
        this.header = initObj.header
      }
      else {
        this.header = new std_msgs.msg.Header();
      }
      if (initObj.hasOwnProperty('command_type')) {
        this.command_type = initObj.command_type
      }
      else {
        this.command_type = 0;
      }
      if (initObj.hasOwnProperty('joint_cmds')) {
        this.joint_cmds = initObj.joint_cmds
      }
      else {
        this.joint_cmds = [];
      }
      if (initObj.hasOwnProperty('vel_limits')) {
        this.vel_limits = initObj.vel_limits
      }
      else {
        this.vel_limits = [];
      }
    }
  }

  static serialize(obj, buffer, bufferOffset) {
    // Serializes a message object of type JacoJointCmd
    // Serialize message field [header]
    bufferOffset = std_msgs.msg.Header.serialize(obj.header, buffer, bufferOffset);
    // Serialize message field [command_type]
    bufferOffset = _serializer.uint32(obj.command_type, buffer, bufferOffset);
    // Serialize message field [joint_cmds]
    bufferOffset = _arraySerializer.float32(obj.joint_cmds, buffer, bufferOffset, null);
    // Serialize message field [vel_limits]
    bufferOffset = _arraySerializer.float32(obj.vel_limits, buffer, bufferOffset, null);
    return bufferOffset;
  }

  static deserialize(buffer, bufferOffset=[0]) {
    //deserializes a message object of type JacoJointCmd
    let len;
    let data = new JacoJointCmd(null);
    // Deserialize message field [header]
    data.header = std_msgs.msg.Header.deserialize(buffer, bufferOffset);
    // Deserialize message field [command_type]
    data.command_type = _deserializer.uint32(buffer, bufferOffset);
    // Deserialize message field [joint_cmds]
    data.joint_cmds = _arrayDeserializer.float32(buffer, bufferOffset, null)
    // Deserialize message field [vel_limits]
    data.vel_limits = _arrayDeserializer.float32(buffer, bufferOffset, null)
    return data;
  }

  static getMessageSize(object) {
    let length = 0;
    length += std_msgs.msg.Header.getMessageSize(object.header);
    length += 4 * object.joint_cmds.length;
    length += 4 * object.vel_limits.length;
    return length + 12;
  }

  static datatype() {
    // Returns string type for a message object
    return 'movo_msgs/JacoJointCmd';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'f04ef8268b267f61fee55c68b617df3d';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    Header header
    uint32 command_type
    float32[] joint_cmds
    float32[] vel_limits
    
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
    const resolved = new JacoJointCmd(null);
    if (msg.header !== undefined) {
      resolved.header = std_msgs.msg.Header.Resolve(msg.header)
    }
    else {
      resolved.header = new std_msgs.msg.Header()
    }

    if (msg.command_type !== undefined) {
      resolved.command_type = msg.command_type;
    }
    else {
      resolved.command_type = 0
    }

    if (msg.joint_cmds !== undefined) {
      resolved.joint_cmds = msg.joint_cmds;
    }
    else {
      resolved.joint_cmds = []
    }

    if (msg.vel_limits !== undefined) {
      resolved.vel_limits = msg.vel_limits;
    }
    else {
      resolved.vel_limits = []
    }

    return resolved;
    }
};

module.exports = JacoJointCmd;
