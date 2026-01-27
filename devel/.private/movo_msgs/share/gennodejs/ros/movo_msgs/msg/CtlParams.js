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

class CtlParams {
  constructor(initObj={}) {
    if (initObj === null) {
      // initObj === null is a special case for deserialization where we don't initialize fields
      this.header = null;
      this.p_gain_rps_per_rps = null;
      this.i_gain_rps_per_rad = null;
      this.d_gain_rps_per_rps2 = null;
      this.fdfwd_gain_rps_per_motor_rps = null;
      this.p_error_limit_rps = null;
      this.i_error_limit_rad = null;
      this.d_error_limit_rps2 = null;
      this.i_error_drain_rate_rad_per_frame = null;
      this.output_limit_rps = null;
      this.input_target_limit_rps = null;
      this.control_tuning_unlocked = null;
    }
    else {
      if (initObj.hasOwnProperty('header')) {
        this.header = initObj.header
      }
      else {
        this.header = new std_msgs.msg.Header();
      }
      if (initObj.hasOwnProperty('p_gain_rps_per_rps')) {
        this.p_gain_rps_per_rps = initObj.p_gain_rps_per_rps
      }
      else {
        this.p_gain_rps_per_rps = 0.0;
      }
      if (initObj.hasOwnProperty('i_gain_rps_per_rad')) {
        this.i_gain_rps_per_rad = initObj.i_gain_rps_per_rad
      }
      else {
        this.i_gain_rps_per_rad = 0.0;
      }
      if (initObj.hasOwnProperty('d_gain_rps_per_rps2')) {
        this.d_gain_rps_per_rps2 = initObj.d_gain_rps_per_rps2
      }
      else {
        this.d_gain_rps_per_rps2 = 0.0;
      }
      if (initObj.hasOwnProperty('fdfwd_gain_rps_per_motor_rps')) {
        this.fdfwd_gain_rps_per_motor_rps = initObj.fdfwd_gain_rps_per_motor_rps
      }
      else {
        this.fdfwd_gain_rps_per_motor_rps = 0.0;
      }
      if (initObj.hasOwnProperty('p_error_limit_rps')) {
        this.p_error_limit_rps = initObj.p_error_limit_rps
      }
      else {
        this.p_error_limit_rps = 0.0;
      }
      if (initObj.hasOwnProperty('i_error_limit_rad')) {
        this.i_error_limit_rad = initObj.i_error_limit_rad
      }
      else {
        this.i_error_limit_rad = 0.0;
      }
      if (initObj.hasOwnProperty('d_error_limit_rps2')) {
        this.d_error_limit_rps2 = initObj.d_error_limit_rps2
      }
      else {
        this.d_error_limit_rps2 = 0.0;
      }
      if (initObj.hasOwnProperty('i_error_drain_rate_rad_per_frame')) {
        this.i_error_drain_rate_rad_per_frame = initObj.i_error_drain_rate_rad_per_frame
      }
      else {
        this.i_error_drain_rate_rad_per_frame = 0.0;
      }
      if (initObj.hasOwnProperty('output_limit_rps')) {
        this.output_limit_rps = initObj.output_limit_rps
      }
      else {
        this.output_limit_rps = 0.0;
      }
      if (initObj.hasOwnProperty('input_target_limit_rps')) {
        this.input_target_limit_rps = initObj.input_target_limit_rps
      }
      else {
        this.input_target_limit_rps = 0.0;
      }
      if (initObj.hasOwnProperty('control_tuning_unlocked')) {
        this.control_tuning_unlocked = initObj.control_tuning_unlocked
      }
      else {
        this.control_tuning_unlocked = false;
      }
    }
  }

  static serialize(obj, buffer, bufferOffset) {
    // Serializes a message object of type CtlParams
    // Serialize message field [header]
    bufferOffset = std_msgs.msg.Header.serialize(obj.header, buffer, bufferOffset);
    // Serialize message field [p_gain_rps_per_rps]
    bufferOffset = _serializer.float32(obj.p_gain_rps_per_rps, buffer, bufferOffset);
    // Serialize message field [i_gain_rps_per_rad]
    bufferOffset = _serializer.float32(obj.i_gain_rps_per_rad, buffer, bufferOffset);
    // Serialize message field [d_gain_rps_per_rps2]
    bufferOffset = _serializer.float32(obj.d_gain_rps_per_rps2, buffer, bufferOffset);
    // Serialize message field [fdfwd_gain_rps_per_motor_rps]
    bufferOffset = _serializer.float32(obj.fdfwd_gain_rps_per_motor_rps, buffer, bufferOffset);
    // Serialize message field [p_error_limit_rps]
    bufferOffset = _serializer.float32(obj.p_error_limit_rps, buffer, bufferOffset);
    // Serialize message field [i_error_limit_rad]
    bufferOffset = _serializer.float32(obj.i_error_limit_rad, buffer, bufferOffset);
    // Serialize message field [d_error_limit_rps2]
    bufferOffset = _serializer.float32(obj.d_error_limit_rps2, buffer, bufferOffset);
    // Serialize message field [i_error_drain_rate_rad_per_frame]
    bufferOffset = _serializer.float32(obj.i_error_drain_rate_rad_per_frame, buffer, bufferOffset);
    // Serialize message field [output_limit_rps]
    bufferOffset = _serializer.float32(obj.output_limit_rps, buffer, bufferOffset);
    // Serialize message field [input_target_limit_rps]
    bufferOffset = _serializer.float32(obj.input_target_limit_rps, buffer, bufferOffset);
    // Serialize message field [control_tuning_unlocked]
    bufferOffset = _serializer.bool(obj.control_tuning_unlocked, buffer, bufferOffset);
    return bufferOffset;
  }

  static deserialize(buffer, bufferOffset=[0]) {
    //deserializes a message object of type CtlParams
    let len;
    let data = new CtlParams(null);
    // Deserialize message field [header]
    data.header = std_msgs.msg.Header.deserialize(buffer, bufferOffset);
    // Deserialize message field [p_gain_rps_per_rps]
    data.p_gain_rps_per_rps = _deserializer.float32(buffer, bufferOffset);
    // Deserialize message field [i_gain_rps_per_rad]
    data.i_gain_rps_per_rad = _deserializer.float32(buffer, bufferOffset);
    // Deserialize message field [d_gain_rps_per_rps2]
    data.d_gain_rps_per_rps2 = _deserializer.float32(buffer, bufferOffset);
    // Deserialize message field [fdfwd_gain_rps_per_motor_rps]
    data.fdfwd_gain_rps_per_motor_rps = _deserializer.float32(buffer, bufferOffset);
    // Deserialize message field [p_error_limit_rps]
    data.p_error_limit_rps = _deserializer.float32(buffer, bufferOffset);
    // Deserialize message field [i_error_limit_rad]
    data.i_error_limit_rad = _deserializer.float32(buffer, bufferOffset);
    // Deserialize message field [d_error_limit_rps2]
    data.d_error_limit_rps2 = _deserializer.float32(buffer, bufferOffset);
    // Deserialize message field [i_error_drain_rate_rad_per_frame]
    data.i_error_drain_rate_rad_per_frame = _deserializer.float32(buffer, bufferOffset);
    // Deserialize message field [output_limit_rps]
    data.output_limit_rps = _deserializer.float32(buffer, bufferOffset);
    // Deserialize message field [input_target_limit_rps]
    data.input_target_limit_rps = _deserializer.float32(buffer, bufferOffset);
    // Deserialize message field [control_tuning_unlocked]
    data.control_tuning_unlocked = _deserializer.bool(buffer, bufferOffset);
    return data;
  }

  static getMessageSize(object) {
    let length = 0;
    length += std_msgs.msg.Header.getMessageSize(object.header);
    return length + 41;
  }

  static datatype() {
    // Returns string type for a message object
    return 'movo_msgs/CtlParams';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '93aa6e90d2031cf65eb0758a993f2326';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    Header header
    float32 p_gain_rps_per_rps
    float32 i_gain_rps_per_rad
    float32 d_gain_rps_per_rps2
    float32 fdfwd_gain_rps_per_motor_rps
    float32 p_error_limit_rps
    float32 i_error_limit_rad
    float32 d_error_limit_rps2
    float32 i_error_drain_rate_rad_per_frame
    float32 output_limit_rps
    float32 input_target_limit_rps
    bool control_tuning_unlocked
    
    
    
    
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
    const resolved = new CtlParams(null);
    if (msg.header !== undefined) {
      resolved.header = std_msgs.msg.Header.Resolve(msg.header)
    }
    else {
      resolved.header = new std_msgs.msg.Header()
    }

    if (msg.p_gain_rps_per_rps !== undefined) {
      resolved.p_gain_rps_per_rps = msg.p_gain_rps_per_rps;
    }
    else {
      resolved.p_gain_rps_per_rps = 0.0
    }

    if (msg.i_gain_rps_per_rad !== undefined) {
      resolved.i_gain_rps_per_rad = msg.i_gain_rps_per_rad;
    }
    else {
      resolved.i_gain_rps_per_rad = 0.0
    }

    if (msg.d_gain_rps_per_rps2 !== undefined) {
      resolved.d_gain_rps_per_rps2 = msg.d_gain_rps_per_rps2;
    }
    else {
      resolved.d_gain_rps_per_rps2 = 0.0
    }

    if (msg.fdfwd_gain_rps_per_motor_rps !== undefined) {
      resolved.fdfwd_gain_rps_per_motor_rps = msg.fdfwd_gain_rps_per_motor_rps;
    }
    else {
      resolved.fdfwd_gain_rps_per_motor_rps = 0.0
    }

    if (msg.p_error_limit_rps !== undefined) {
      resolved.p_error_limit_rps = msg.p_error_limit_rps;
    }
    else {
      resolved.p_error_limit_rps = 0.0
    }

    if (msg.i_error_limit_rad !== undefined) {
      resolved.i_error_limit_rad = msg.i_error_limit_rad;
    }
    else {
      resolved.i_error_limit_rad = 0.0
    }

    if (msg.d_error_limit_rps2 !== undefined) {
      resolved.d_error_limit_rps2 = msg.d_error_limit_rps2;
    }
    else {
      resolved.d_error_limit_rps2 = 0.0
    }

    if (msg.i_error_drain_rate_rad_per_frame !== undefined) {
      resolved.i_error_drain_rate_rad_per_frame = msg.i_error_drain_rate_rad_per_frame;
    }
    else {
      resolved.i_error_drain_rate_rad_per_frame = 0.0
    }

    if (msg.output_limit_rps !== undefined) {
      resolved.output_limit_rps = msg.output_limit_rps;
    }
    else {
      resolved.output_limit_rps = 0.0
    }

    if (msg.input_target_limit_rps !== undefined) {
      resolved.input_target_limit_rps = msg.input_target_limit_rps;
    }
    else {
      resolved.input_target_limit_rps = 0.0
    }

    if (msg.control_tuning_unlocked !== undefined) {
      resolved.control_tuning_unlocked = msg.control_tuning_unlocked;
    }
    else {
      resolved.control_tuning_unlocked = false
    }

    return resolved;
    }
};

module.exports = CtlParams;
