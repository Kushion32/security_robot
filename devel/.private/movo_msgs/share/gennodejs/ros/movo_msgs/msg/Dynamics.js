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

class Dynamics {
  constructor(initObj={}) {
    if (initObj === null) {
      // initObj === null is a special case for deserialization where we don't initialize fields
      this.header = null;
      this.x_vel_target_mps = null;
      this.y_vel_target_mps = null;
      this.yaw_rate_target_rps = null;
      this.linear_actuator_target_m = null;
      this.x_vel_limit_mps = null;
      this.y_vel_limit_mps = null;
      this.yaw_rate_limit_rps = null;
      this.linear_actuator_vel_limit_mps = null;
      this.wheel_vel_mps = null;
      this.wheel_pos_m = null;
      this.linear_actuator_vel_mps = null;
      this.linear_actuator_position_m = null;
      this.x_accel_mps2 = null;
      this.y_accel_mps2 = null;
      this.yaw_accel_mps2 = null;
      this.yaw_angle_rad = null;
      this.odom_yaw_angle_rad = null;
    }
    else {
      if (initObj.hasOwnProperty('header')) {
        this.header = initObj.header
      }
      else {
        this.header = new std_msgs.msg.Header();
      }
      if (initObj.hasOwnProperty('x_vel_target_mps')) {
        this.x_vel_target_mps = initObj.x_vel_target_mps
      }
      else {
        this.x_vel_target_mps = 0.0;
      }
      if (initObj.hasOwnProperty('y_vel_target_mps')) {
        this.y_vel_target_mps = initObj.y_vel_target_mps
      }
      else {
        this.y_vel_target_mps = 0.0;
      }
      if (initObj.hasOwnProperty('yaw_rate_target_rps')) {
        this.yaw_rate_target_rps = initObj.yaw_rate_target_rps
      }
      else {
        this.yaw_rate_target_rps = 0.0;
      }
      if (initObj.hasOwnProperty('linear_actuator_target_m')) {
        this.linear_actuator_target_m = initObj.linear_actuator_target_m
      }
      else {
        this.linear_actuator_target_m = 0.0;
      }
      if (initObj.hasOwnProperty('x_vel_limit_mps')) {
        this.x_vel_limit_mps = initObj.x_vel_limit_mps
      }
      else {
        this.x_vel_limit_mps = 0.0;
      }
      if (initObj.hasOwnProperty('y_vel_limit_mps')) {
        this.y_vel_limit_mps = initObj.y_vel_limit_mps
      }
      else {
        this.y_vel_limit_mps = 0.0;
      }
      if (initObj.hasOwnProperty('yaw_rate_limit_rps')) {
        this.yaw_rate_limit_rps = initObj.yaw_rate_limit_rps
      }
      else {
        this.yaw_rate_limit_rps = 0.0;
      }
      if (initObj.hasOwnProperty('linear_actuator_vel_limit_mps')) {
        this.linear_actuator_vel_limit_mps = initObj.linear_actuator_vel_limit_mps
      }
      else {
        this.linear_actuator_vel_limit_mps = 0.0;
      }
      if (initObj.hasOwnProperty('wheel_vel_mps')) {
        this.wheel_vel_mps = initObj.wheel_vel_mps
      }
      else {
        this.wheel_vel_mps = [];
      }
      if (initObj.hasOwnProperty('wheel_pos_m')) {
        this.wheel_pos_m = initObj.wheel_pos_m
      }
      else {
        this.wheel_pos_m = [];
      }
      if (initObj.hasOwnProperty('linear_actuator_vel_mps')) {
        this.linear_actuator_vel_mps = initObj.linear_actuator_vel_mps
      }
      else {
        this.linear_actuator_vel_mps = 0.0;
      }
      if (initObj.hasOwnProperty('linear_actuator_position_m')) {
        this.linear_actuator_position_m = initObj.linear_actuator_position_m
      }
      else {
        this.linear_actuator_position_m = 0.0;
      }
      if (initObj.hasOwnProperty('x_accel_mps2')) {
        this.x_accel_mps2 = initObj.x_accel_mps2
      }
      else {
        this.x_accel_mps2 = 0.0;
      }
      if (initObj.hasOwnProperty('y_accel_mps2')) {
        this.y_accel_mps2 = initObj.y_accel_mps2
      }
      else {
        this.y_accel_mps2 = 0.0;
      }
      if (initObj.hasOwnProperty('yaw_accel_mps2')) {
        this.yaw_accel_mps2 = initObj.yaw_accel_mps2
      }
      else {
        this.yaw_accel_mps2 = 0.0;
      }
      if (initObj.hasOwnProperty('yaw_angle_rad')) {
        this.yaw_angle_rad = initObj.yaw_angle_rad
      }
      else {
        this.yaw_angle_rad = 0.0;
      }
      if (initObj.hasOwnProperty('odom_yaw_angle_rad')) {
        this.odom_yaw_angle_rad = initObj.odom_yaw_angle_rad
      }
      else {
        this.odom_yaw_angle_rad = 0.0;
      }
    }
  }

  static serialize(obj, buffer, bufferOffset) {
    // Serializes a message object of type Dynamics
    // Serialize message field [header]
    bufferOffset = std_msgs.msg.Header.serialize(obj.header, buffer, bufferOffset);
    // Serialize message field [x_vel_target_mps]
    bufferOffset = _serializer.float32(obj.x_vel_target_mps, buffer, bufferOffset);
    // Serialize message field [y_vel_target_mps]
    bufferOffset = _serializer.float32(obj.y_vel_target_mps, buffer, bufferOffset);
    // Serialize message field [yaw_rate_target_rps]
    bufferOffset = _serializer.float32(obj.yaw_rate_target_rps, buffer, bufferOffset);
    // Serialize message field [linear_actuator_target_m]
    bufferOffset = _serializer.float32(obj.linear_actuator_target_m, buffer, bufferOffset);
    // Serialize message field [x_vel_limit_mps]
    bufferOffset = _serializer.float32(obj.x_vel_limit_mps, buffer, bufferOffset);
    // Serialize message field [y_vel_limit_mps]
    bufferOffset = _serializer.float32(obj.y_vel_limit_mps, buffer, bufferOffset);
    // Serialize message field [yaw_rate_limit_rps]
    bufferOffset = _serializer.float32(obj.yaw_rate_limit_rps, buffer, bufferOffset);
    // Serialize message field [linear_actuator_vel_limit_mps]
    bufferOffset = _serializer.float32(obj.linear_actuator_vel_limit_mps, buffer, bufferOffset);
    // Serialize message field [wheel_vel_mps]
    bufferOffset = _arraySerializer.float32(obj.wheel_vel_mps, buffer, bufferOffset, null);
    // Serialize message field [wheel_pos_m]
    bufferOffset = _arraySerializer.float32(obj.wheel_pos_m, buffer, bufferOffset, null);
    // Serialize message field [linear_actuator_vel_mps]
    bufferOffset = _serializer.float32(obj.linear_actuator_vel_mps, buffer, bufferOffset);
    // Serialize message field [linear_actuator_position_m]
    bufferOffset = _serializer.float32(obj.linear_actuator_position_m, buffer, bufferOffset);
    // Serialize message field [x_accel_mps2]
    bufferOffset = _serializer.float32(obj.x_accel_mps2, buffer, bufferOffset);
    // Serialize message field [y_accel_mps2]
    bufferOffset = _serializer.float32(obj.y_accel_mps2, buffer, bufferOffset);
    // Serialize message field [yaw_accel_mps2]
    bufferOffset = _serializer.float32(obj.yaw_accel_mps2, buffer, bufferOffset);
    // Serialize message field [yaw_angle_rad]
    bufferOffset = _serializer.float32(obj.yaw_angle_rad, buffer, bufferOffset);
    // Serialize message field [odom_yaw_angle_rad]
    bufferOffset = _serializer.float32(obj.odom_yaw_angle_rad, buffer, bufferOffset);
    return bufferOffset;
  }

  static deserialize(buffer, bufferOffset=[0]) {
    //deserializes a message object of type Dynamics
    let len;
    let data = new Dynamics(null);
    // Deserialize message field [header]
    data.header = std_msgs.msg.Header.deserialize(buffer, bufferOffset);
    // Deserialize message field [x_vel_target_mps]
    data.x_vel_target_mps = _deserializer.float32(buffer, bufferOffset);
    // Deserialize message field [y_vel_target_mps]
    data.y_vel_target_mps = _deserializer.float32(buffer, bufferOffset);
    // Deserialize message field [yaw_rate_target_rps]
    data.yaw_rate_target_rps = _deserializer.float32(buffer, bufferOffset);
    // Deserialize message field [linear_actuator_target_m]
    data.linear_actuator_target_m = _deserializer.float32(buffer, bufferOffset);
    // Deserialize message field [x_vel_limit_mps]
    data.x_vel_limit_mps = _deserializer.float32(buffer, bufferOffset);
    // Deserialize message field [y_vel_limit_mps]
    data.y_vel_limit_mps = _deserializer.float32(buffer, bufferOffset);
    // Deserialize message field [yaw_rate_limit_rps]
    data.yaw_rate_limit_rps = _deserializer.float32(buffer, bufferOffset);
    // Deserialize message field [linear_actuator_vel_limit_mps]
    data.linear_actuator_vel_limit_mps = _deserializer.float32(buffer, bufferOffset);
    // Deserialize message field [wheel_vel_mps]
    data.wheel_vel_mps = _arrayDeserializer.float32(buffer, bufferOffset, null)
    // Deserialize message field [wheel_pos_m]
    data.wheel_pos_m = _arrayDeserializer.float32(buffer, bufferOffset, null)
    // Deserialize message field [linear_actuator_vel_mps]
    data.linear_actuator_vel_mps = _deserializer.float32(buffer, bufferOffset);
    // Deserialize message field [linear_actuator_position_m]
    data.linear_actuator_position_m = _deserializer.float32(buffer, bufferOffset);
    // Deserialize message field [x_accel_mps2]
    data.x_accel_mps2 = _deserializer.float32(buffer, bufferOffset);
    // Deserialize message field [y_accel_mps2]
    data.y_accel_mps2 = _deserializer.float32(buffer, bufferOffset);
    // Deserialize message field [yaw_accel_mps2]
    data.yaw_accel_mps2 = _deserializer.float32(buffer, bufferOffset);
    // Deserialize message field [yaw_angle_rad]
    data.yaw_angle_rad = _deserializer.float32(buffer, bufferOffset);
    // Deserialize message field [odom_yaw_angle_rad]
    data.odom_yaw_angle_rad = _deserializer.float32(buffer, bufferOffset);
    return data;
  }

  static getMessageSize(object) {
    let length = 0;
    length += std_msgs.msg.Header.getMessageSize(object.header);
    length += 4 * object.wheel_vel_mps.length;
    length += 4 * object.wheel_pos_m.length;
    return length + 68;
  }

  static datatype() {
    // Returns string type for a message object
    return 'movo_msgs/Dynamics';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'dd32431766932850de2062a4263871b4';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    Header header
    float32 x_vel_target_mps
    float32 y_vel_target_mps
    float32 yaw_rate_target_rps
    float32 linear_actuator_target_m
    float32 x_vel_limit_mps
    float32 y_vel_limit_mps
    float32 yaw_rate_limit_rps
    float32 linear_actuator_vel_limit_mps
    float32[] wheel_vel_mps
    float32[] wheel_pos_m
    float32 linear_actuator_vel_mps
    float32 linear_actuator_position_m
    float32 x_accel_mps2
    float32 y_accel_mps2
    float32 yaw_accel_mps2
    float32 yaw_angle_rad
    float32 odom_yaw_angle_rad
    
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
    const resolved = new Dynamics(null);
    if (msg.header !== undefined) {
      resolved.header = std_msgs.msg.Header.Resolve(msg.header)
    }
    else {
      resolved.header = new std_msgs.msg.Header()
    }

    if (msg.x_vel_target_mps !== undefined) {
      resolved.x_vel_target_mps = msg.x_vel_target_mps;
    }
    else {
      resolved.x_vel_target_mps = 0.0
    }

    if (msg.y_vel_target_mps !== undefined) {
      resolved.y_vel_target_mps = msg.y_vel_target_mps;
    }
    else {
      resolved.y_vel_target_mps = 0.0
    }

    if (msg.yaw_rate_target_rps !== undefined) {
      resolved.yaw_rate_target_rps = msg.yaw_rate_target_rps;
    }
    else {
      resolved.yaw_rate_target_rps = 0.0
    }

    if (msg.linear_actuator_target_m !== undefined) {
      resolved.linear_actuator_target_m = msg.linear_actuator_target_m;
    }
    else {
      resolved.linear_actuator_target_m = 0.0
    }

    if (msg.x_vel_limit_mps !== undefined) {
      resolved.x_vel_limit_mps = msg.x_vel_limit_mps;
    }
    else {
      resolved.x_vel_limit_mps = 0.0
    }

    if (msg.y_vel_limit_mps !== undefined) {
      resolved.y_vel_limit_mps = msg.y_vel_limit_mps;
    }
    else {
      resolved.y_vel_limit_mps = 0.0
    }

    if (msg.yaw_rate_limit_rps !== undefined) {
      resolved.yaw_rate_limit_rps = msg.yaw_rate_limit_rps;
    }
    else {
      resolved.yaw_rate_limit_rps = 0.0
    }

    if (msg.linear_actuator_vel_limit_mps !== undefined) {
      resolved.linear_actuator_vel_limit_mps = msg.linear_actuator_vel_limit_mps;
    }
    else {
      resolved.linear_actuator_vel_limit_mps = 0.0
    }

    if (msg.wheel_vel_mps !== undefined) {
      resolved.wheel_vel_mps = msg.wheel_vel_mps;
    }
    else {
      resolved.wheel_vel_mps = []
    }

    if (msg.wheel_pos_m !== undefined) {
      resolved.wheel_pos_m = msg.wheel_pos_m;
    }
    else {
      resolved.wheel_pos_m = []
    }

    if (msg.linear_actuator_vel_mps !== undefined) {
      resolved.linear_actuator_vel_mps = msg.linear_actuator_vel_mps;
    }
    else {
      resolved.linear_actuator_vel_mps = 0.0
    }

    if (msg.linear_actuator_position_m !== undefined) {
      resolved.linear_actuator_position_m = msg.linear_actuator_position_m;
    }
    else {
      resolved.linear_actuator_position_m = 0.0
    }

    if (msg.x_accel_mps2 !== undefined) {
      resolved.x_accel_mps2 = msg.x_accel_mps2;
    }
    else {
      resolved.x_accel_mps2 = 0.0
    }

    if (msg.y_accel_mps2 !== undefined) {
      resolved.y_accel_mps2 = msg.y_accel_mps2;
    }
    else {
      resolved.y_accel_mps2 = 0.0
    }

    if (msg.yaw_accel_mps2 !== undefined) {
      resolved.yaw_accel_mps2 = msg.yaw_accel_mps2;
    }
    else {
      resolved.yaw_accel_mps2 = 0.0
    }

    if (msg.yaw_angle_rad !== undefined) {
      resolved.yaw_angle_rad = msg.yaw_angle_rad;
    }
    else {
      resolved.yaw_angle_rad = 0.0
    }

    if (msg.odom_yaw_angle_rad !== undefined) {
      resolved.odom_yaw_angle_rad = msg.odom_yaw_angle_rad;
    }
    else {
      resolved.odom_yaw_angle_rad = 0.0
    }

    return resolved;
    }
};

module.exports = Dynamics;
