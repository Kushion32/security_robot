// Auto-generated. Do not edit!

// (in-package movo_msgs.msg)


"use strict";

const _serializer = _ros_msg_utils.Serialize;
const _arraySerializer = _serializer.Array;
const _deserializer = _ros_msg_utils.Deserialize;
const _arrayDeserializer = _deserializer.Array;
const _finder = _ros_msg_utils.Find;
const _getByteLength = _ros_msg_utils.getByteLength;

//-----------------------------------------------------------

class MotionTestCmd {
  constructor(initObj={}) {
    if (initObj === null) {
      // initObj === null is a special case for deserialization where we don't initialize fields
      this.test_type = null;
      this.duration_sec = null;
      this.magnitude = null;
    }
    else {
      if (initObj.hasOwnProperty('test_type')) {
        this.test_type = initObj.test_type
      }
      else {
        this.test_type = 0;
      }
      if (initObj.hasOwnProperty('duration_sec')) {
        this.duration_sec = initObj.duration_sec
      }
      else {
        this.duration_sec = 0;
      }
      if (initObj.hasOwnProperty('magnitude')) {
        this.magnitude = initObj.magnitude
      }
      else {
        this.magnitude = 0.0;
      }
    }
  }

  static serialize(obj, buffer, bufferOffset) {
    // Serializes a message object of type MotionTestCmd
    // Serialize message field [test_type]
    bufferOffset = _serializer.uint32(obj.test_type, buffer, bufferOffset);
    // Serialize message field [duration_sec]
    bufferOffset = _serializer.uint32(obj.duration_sec, buffer, bufferOffset);
    // Serialize message field [magnitude]
    bufferOffset = _serializer.float32(obj.magnitude, buffer, bufferOffset);
    return bufferOffset;
  }

  static deserialize(buffer, bufferOffset=[0]) {
    //deserializes a message object of type MotionTestCmd
    let len;
    let data = new MotionTestCmd(null);
    // Deserialize message field [test_type]
    data.test_type = _deserializer.uint32(buffer, bufferOffset);
    // Deserialize message field [duration_sec]
    data.duration_sec = _deserializer.uint32(buffer, bufferOffset);
    // Deserialize message field [magnitude]
    data.magnitude = _deserializer.float32(buffer, bufferOffset);
    return data;
  }

  static getMessageSize(object) {
    return 12;
  }

  static datatype() {
    // Returns string type for a message object
    return 'movo_msgs/MotionTestCmd';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'f60142650ddadc978bbd697beb24a04f';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    uint32 test_type
    uint32 duration_sec
    float32 magnitude
    
    `;
  }

  static Resolve(msg) {
    // deep-construct a valid message object instance of whatever was passed in
    if (typeof msg !== 'object' || msg === null) {
      msg = {};
    }
    const resolved = new MotionTestCmd(null);
    if (msg.test_type !== undefined) {
      resolved.test_type = msg.test_type;
    }
    else {
      resolved.test_type = 0
    }

    if (msg.duration_sec !== undefined) {
      resolved.duration_sec = msg.duration_sec;
    }
    else {
      resolved.duration_sec = 0
    }

    if (msg.magnitude !== undefined) {
      resolved.magnitude = msg.magnitude;
    }
    else {
      resolved.magnitude = 0.0
    }

    return resolved;
    }
};

module.exports = MotionTestCmd;
