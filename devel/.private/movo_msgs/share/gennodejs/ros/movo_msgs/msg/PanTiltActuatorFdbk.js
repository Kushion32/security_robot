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
let geometry_msgs = _finder('geometry_msgs');

//-----------------------------------------------------------

class PanTiltActuatorFdbk {
  constructor(initObj={}) {
    if (initObj === null) {
      // initObj === null is a special case for deserialization where we don't initialize fields
      this.header = null;
      this.current = null;
      this.pos_rad = null;
      this.vel_rps = null;
      this.torque_nm = null;
      this.pwm = null;
      this.encoder_rad = null;
      this.accel = null;
      this.temperature_degC = null;
    }
    else {
      if (initObj.hasOwnProperty('header')) {
        this.header = initObj.header
      }
      else {
        this.header = new std_msgs.msg.Header();
      }
      if (initObj.hasOwnProperty('current')) {
        this.current = initObj.current
      }
      else {
        this.current = 0.0;
      }
      if (initObj.hasOwnProperty('pos_rad')) {
        this.pos_rad = initObj.pos_rad
      }
      else {
        this.pos_rad = 0.0;
      }
      if (initObj.hasOwnProperty('vel_rps')) {
        this.vel_rps = initObj.vel_rps
      }
      else {
        this.vel_rps = 0.0;
      }
      if (initObj.hasOwnProperty('torque_nm')) {
        this.torque_nm = initObj.torque_nm
      }
      else {
        this.torque_nm = 0.0;
      }
      if (initObj.hasOwnProperty('pwm')) {
        this.pwm = initObj.pwm
      }
      else {
        this.pwm = 0.0;
      }
      if (initObj.hasOwnProperty('encoder_rad')) {
        this.encoder_rad = initObj.encoder_rad
      }
      else {
        this.encoder_rad = 0.0;
      }
      if (initObj.hasOwnProperty('accel')) {
        this.accel = initObj.accel
      }
      else {
        this.accel = new geometry_msgs.msg.Vector3();
      }
      if (initObj.hasOwnProperty('temperature_degC')) {
        this.temperature_degC = initObj.temperature_degC
      }
      else {
        this.temperature_degC = 0.0;
      }
    }
  }

  static serialize(obj, buffer, bufferOffset) {
    // Serializes a message object of type PanTiltActuatorFdbk
    // Serialize message field [header]
    bufferOffset = std_msgs.msg.Header.serialize(obj.header, buffer, bufferOffset);
    // Serialize message field [current]
    bufferOffset = _serializer.float32(obj.current, buffer, bufferOffset);
    // Serialize message field [pos_rad]
    bufferOffset = _serializer.float32(obj.pos_rad, buffer, bufferOffset);
    // Serialize message field [vel_rps]
    bufferOffset = _serializer.float32(obj.vel_rps, buffer, bufferOffset);
    // Serialize message field [torque_nm]
    bufferOffset = _serializer.float32(obj.torque_nm, buffer, bufferOffset);
    // Serialize message field [pwm]
    bufferOffset = _serializer.float32(obj.pwm, buffer, bufferOffset);
    // Serialize message field [encoder_rad]
    bufferOffset = _serializer.float32(obj.encoder_rad, buffer, bufferOffset);
    // Serialize message field [accel]
    bufferOffset = geometry_msgs.msg.Vector3.serialize(obj.accel, buffer, bufferOffset);
    // Serialize message field [temperature_degC]
    bufferOffset = _serializer.float32(obj.temperature_degC, buffer, bufferOffset);
    return bufferOffset;
  }

  static deserialize(buffer, bufferOffset=[0]) {
    //deserializes a message object of type PanTiltActuatorFdbk
    let len;
    let data = new PanTiltActuatorFdbk(null);
    // Deserialize message field [header]
    data.header = std_msgs.msg.Header.deserialize(buffer, bufferOffset);
    // Deserialize message field [current]
    data.current = _deserializer.float32(buffer, bufferOffset);
    // Deserialize message field [pos_rad]
    data.pos_rad = _deserializer.float32(buffer, bufferOffset);
    // Deserialize message field [vel_rps]
    data.vel_rps = _deserializer.float32(buffer, bufferOffset);
    // Deserialize message field [torque_nm]
    data.torque_nm = _deserializer.float32(buffer, bufferOffset);
    // Deserialize message field [pwm]
    data.pwm = _deserializer.float32(buffer, bufferOffset);
    // Deserialize message field [encoder_rad]
    data.encoder_rad = _deserializer.float32(buffer, bufferOffset);
    // Deserialize message field [accel]
    data.accel = geometry_msgs.msg.Vector3.deserialize(buffer, bufferOffset);
    // Deserialize message field [temperature_degC]
    data.temperature_degC = _deserializer.float32(buffer, bufferOffset);
    return data;
  }

  static getMessageSize(object) {
    let length = 0;
    length += std_msgs.msg.Header.getMessageSize(object.header);
    return length + 52;
  }

  static datatype() {
    // Returns string type for a message object
    return 'movo_msgs/PanTiltActuatorFdbk';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'ff9a650d0514b0eeb8ec92950681d6cb';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    Header header
    float32 current
    float32 pos_rad
    float32 vel_rps
    float32 torque_nm
    float32 pwm
    float32 encoder_rad
    geometry_msgs/Vector3 accel
    float32 temperature_degC
    
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
    MSG: geometry_msgs/Vector3
    # This represents a vector in free space. 
    # It is only meant to represent a direction. Therefore, it does not
    # make sense to apply a translation to it (e.g., when applying a 
    # generic rigid transformation to a Vector3, tf2 will only apply the
    # rotation). If you want your data to be translatable too, use the
    # geometry_msgs/Point message instead.
    
    float64 x
    float64 y
    float64 z
    `;
  }

  static Resolve(msg) {
    // deep-construct a valid message object instance of whatever was passed in
    if (typeof msg !== 'object' || msg === null) {
      msg = {};
    }
    const resolved = new PanTiltActuatorFdbk(null);
    if (msg.header !== undefined) {
      resolved.header = std_msgs.msg.Header.Resolve(msg.header)
    }
    else {
      resolved.header = new std_msgs.msg.Header()
    }

    if (msg.current !== undefined) {
      resolved.current = msg.current;
    }
    else {
      resolved.current = 0.0
    }

    if (msg.pos_rad !== undefined) {
      resolved.pos_rad = msg.pos_rad;
    }
    else {
      resolved.pos_rad = 0.0
    }

    if (msg.vel_rps !== undefined) {
      resolved.vel_rps = msg.vel_rps;
    }
    else {
      resolved.vel_rps = 0.0
    }

    if (msg.torque_nm !== undefined) {
      resolved.torque_nm = msg.torque_nm;
    }
    else {
      resolved.torque_nm = 0.0
    }

    if (msg.pwm !== undefined) {
      resolved.pwm = msg.pwm;
    }
    else {
      resolved.pwm = 0.0
    }

    if (msg.encoder_rad !== undefined) {
      resolved.encoder_rad = msg.encoder_rad;
    }
    else {
      resolved.encoder_rad = 0.0
    }

    if (msg.accel !== undefined) {
      resolved.accel = geometry_msgs.msg.Vector3.Resolve(msg.accel)
    }
    else {
      resolved.accel = new geometry_msgs.msg.Vector3()
    }

    if (msg.temperature_degC !== undefined) {
      resolved.temperature_degC = msg.temperature_degC;
    }
    else {
      resolved.temperature_degC = 0.0
    }

    return resolved;
    }
};

module.exports = PanTiltActuatorFdbk;
