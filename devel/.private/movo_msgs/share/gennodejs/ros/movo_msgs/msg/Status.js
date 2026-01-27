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

class Status {
  constructor(initObj={}) {
    if (initObj === null) {
      // initObj === null is a special case for deserialization where we don't initialize fields
      this.header = null;
      this.fault_status_words = null;
      this.operational_time = null;
      this.operational_state = null;
      this.dynamic_response = null;
      this.machine_id = null;
    }
    else {
      if (initObj.hasOwnProperty('header')) {
        this.header = initObj.header
      }
      else {
        this.header = new std_msgs.msg.Header();
      }
      if (initObj.hasOwnProperty('fault_status_words')) {
        this.fault_status_words = initObj.fault_status_words
      }
      else {
        this.fault_status_words = [];
      }
      if (initObj.hasOwnProperty('operational_time')) {
        this.operational_time = initObj.operational_time
      }
      else {
        this.operational_time = 0.0;
      }
      if (initObj.hasOwnProperty('operational_state')) {
        this.operational_state = initObj.operational_state
      }
      else {
        this.operational_state = 0;
      }
      if (initObj.hasOwnProperty('dynamic_response')) {
        this.dynamic_response = initObj.dynamic_response
      }
      else {
        this.dynamic_response = 0;
      }
      if (initObj.hasOwnProperty('machine_id')) {
        this.machine_id = initObj.machine_id
      }
      else {
        this.machine_id = 0;
      }
    }
  }

  static serialize(obj, buffer, bufferOffset) {
    // Serializes a message object of type Status
    // Serialize message field [header]
    bufferOffset = std_msgs.msg.Header.serialize(obj.header, buffer, bufferOffset);
    // Serialize message field [fault_status_words]
    bufferOffset = _arraySerializer.uint32(obj.fault_status_words, buffer, bufferOffset, null);
    // Serialize message field [operational_time]
    bufferOffset = _serializer.float32(obj.operational_time, buffer, bufferOffset);
    // Serialize message field [operational_state]
    bufferOffset = _serializer.uint32(obj.operational_state, buffer, bufferOffset);
    // Serialize message field [dynamic_response]
    bufferOffset = _serializer.uint32(obj.dynamic_response, buffer, bufferOffset);
    // Serialize message field [machine_id]
    bufferOffset = _serializer.uint32(obj.machine_id, buffer, bufferOffset);
    return bufferOffset;
  }

  static deserialize(buffer, bufferOffset=[0]) {
    //deserializes a message object of type Status
    let len;
    let data = new Status(null);
    // Deserialize message field [header]
    data.header = std_msgs.msg.Header.deserialize(buffer, bufferOffset);
    // Deserialize message field [fault_status_words]
    data.fault_status_words = _arrayDeserializer.uint32(buffer, bufferOffset, null)
    // Deserialize message field [operational_time]
    data.operational_time = _deserializer.float32(buffer, bufferOffset);
    // Deserialize message field [operational_state]
    data.operational_state = _deserializer.uint32(buffer, bufferOffset);
    // Deserialize message field [dynamic_response]
    data.dynamic_response = _deserializer.uint32(buffer, bufferOffset);
    // Deserialize message field [machine_id]
    data.machine_id = _deserializer.uint32(buffer, bufferOffset);
    return data;
  }

  static getMessageSize(object) {
    let length = 0;
    length += std_msgs.msg.Header.getMessageSize(object.header);
    length += 4 * object.fault_status_words.length;
    return length + 20;
  }

  static datatype() {
    // Returns string type for a message object
    return 'movo_msgs/Status';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'dde32396dda94858b879d71dd7ee2e6c';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    Header header
    uint32[] fault_status_words
    float32 operational_time
    uint32 operational_state
    uint32 dynamic_response
    uint32 machine_id
    
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
    const resolved = new Status(null);
    if (msg.header !== undefined) {
      resolved.header = std_msgs.msg.Header.Resolve(msg.header)
    }
    else {
      resolved.header = new std_msgs.msg.Header()
    }

    if (msg.fault_status_words !== undefined) {
      resolved.fault_status_words = msg.fault_status_words;
    }
    else {
      resolved.fault_status_words = []
    }

    if (msg.operational_time !== undefined) {
      resolved.operational_time = msg.operational_time;
    }
    else {
      resolved.operational_time = 0.0
    }

    if (msg.operational_state !== undefined) {
      resolved.operational_state = msg.operational_state;
    }
    else {
      resolved.operational_state = 0
    }

    if (msg.dynamic_response !== undefined) {
      resolved.dynamic_response = msg.dynamic_response;
    }
    else {
      resolved.dynamic_response = 0
    }

    if (msg.machine_id !== undefined) {
      resolved.machine_id = msg.machine_id;
    }
    else {
      resolved.machine_id = 0
    }

    return resolved;
    }
};

module.exports = Status;
