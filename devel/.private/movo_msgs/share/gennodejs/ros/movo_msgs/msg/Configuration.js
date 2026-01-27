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

class Configuration {
  constructor(initObj={}) {
    if (initObj === null) {
      // initObj === null is a special case for deserialization where we don't initialize fields
      this.header = null;
      this.teleop_x_vel_limit_mps = null;
      this.teleop_y_vel_limit_mps = null;
      this.teleop_accel_limit_mps2 = null;
      this.teleop_yaw_rate_limit_rps = null;
      this.teleop_yaw_accel_limit_rps2 = null;
      this.teleop_arm_vel_limit = null;
      this.teleop_pan_tilt_vel_limit = null;
      this.teleop_linear_actuator_vel_limit = null;
      this.x_vel_limit_mps = null;
      this.y_vel_limit_mps = null;
      this.accel_limit_mps2 = null;
      this.decel_limit_mps2 = null;
      this.dtz_decel_limit_mps2 = null;
      this.yaw_rate_limit_rps = null;
      this.yaw_accel_limit_rps2 = null;
      this.wheel_diameter_m = null;
      this.wheelbase_length_m = null;
      this.wheel_track_width_m = null;
      this.gear_ratio = null;
      this.config_bitmap = null;
      this.eth_ip_address = null;
      this.eth_port_number = null;
      this.eth_subnet_mask = null;
      this.eth_gateway = null;
    }
    else {
      if (initObj.hasOwnProperty('header')) {
        this.header = initObj.header
      }
      else {
        this.header = new std_msgs.msg.Header();
      }
      if (initObj.hasOwnProperty('teleop_x_vel_limit_mps')) {
        this.teleop_x_vel_limit_mps = initObj.teleop_x_vel_limit_mps
      }
      else {
        this.teleop_x_vel_limit_mps = 0.0;
      }
      if (initObj.hasOwnProperty('teleop_y_vel_limit_mps')) {
        this.teleop_y_vel_limit_mps = initObj.teleop_y_vel_limit_mps
      }
      else {
        this.teleop_y_vel_limit_mps = 0.0;
      }
      if (initObj.hasOwnProperty('teleop_accel_limit_mps2')) {
        this.teleop_accel_limit_mps2 = initObj.teleop_accel_limit_mps2
      }
      else {
        this.teleop_accel_limit_mps2 = 0.0;
      }
      if (initObj.hasOwnProperty('teleop_yaw_rate_limit_rps')) {
        this.teleop_yaw_rate_limit_rps = initObj.teleop_yaw_rate_limit_rps
      }
      else {
        this.teleop_yaw_rate_limit_rps = 0.0;
      }
      if (initObj.hasOwnProperty('teleop_yaw_accel_limit_rps2')) {
        this.teleop_yaw_accel_limit_rps2 = initObj.teleop_yaw_accel_limit_rps2
      }
      else {
        this.teleop_yaw_accel_limit_rps2 = 0.0;
      }
      if (initObj.hasOwnProperty('teleop_arm_vel_limit')) {
        this.teleop_arm_vel_limit = initObj.teleop_arm_vel_limit
      }
      else {
        this.teleop_arm_vel_limit = 0.0;
      }
      if (initObj.hasOwnProperty('teleop_pan_tilt_vel_limit')) {
        this.teleop_pan_tilt_vel_limit = initObj.teleop_pan_tilt_vel_limit
      }
      else {
        this.teleop_pan_tilt_vel_limit = 0.0;
      }
      if (initObj.hasOwnProperty('teleop_linear_actuator_vel_limit')) {
        this.teleop_linear_actuator_vel_limit = initObj.teleop_linear_actuator_vel_limit
      }
      else {
        this.teleop_linear_actuator_vel_limit = 0.0;
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
      if (initObj.hasOwnProperty('accel_limit_mps2')) {
        this.accel_limit_mps2 = initObj.accel_limit_mps2
      }
      else {
        this.accel_limit_mps2 = 0.0;
      }
      if (initObj.hasOwnProperty('decel_limit_mps2')) {
        this.decel_limit_mps2 = initObj.decel_limit_mps2
      }
      else {
        this.decel_limit_mps2 = 0.0;
      }
      if (initObj.hasOwnProperty('dtz_decel_limit_mps2')) {
        this.dtz_decel_limit_mps2 = initObj.dtz_decel_limit_mps2
      }
      else {
        this.dtz_decel_limit_mps2 = 0.0;
      }
      if (initObj.hasOwnProperty('yaw_rate_limit_rps')) {
        this.yaw_rate_limit_rps = initObj.yaw_rate_limit_rps
      }
      else {
        this.yaw_rate_limit_rps = 0.0;
      }
      if (initObj.hasOwnProperty('yaw_accel_limit_rps2')) {
        this.yaw_accel_limit_rps2 = initObj.yaw_accel_limit_rps2
      }
      else {
        this.yaw_accel_limit_rps2 = 0.0;
      }
      if (initObj.hasOwnProperty('wheel_diameter_m')) {
        this.wheel_diameter_m = initObj.wheel_diameter_m
      }
      else {
        this.wheel_diameter_m = 0.0;
      }
      if (initObj.hasOwnProperty('wheelbase_length_m')) {
        this.wheelbase_length_m = initObj.wheelbase_length_m
      }
      else {
        this.wheelbase_length_m = 0.0;
      }
      if (initObj.hasOwnProperty('wheel_track_width_m')) {
        this.wheel_track_width_m = initObj.wheel_track_width_m
      }
      else {
        this.wheel_track_width_m = 0.0;
      }
      if (initObj.hasOwnProperty('gear_ratio')) {
        this.gear_ratio = initObj.gear_ratio
      }
      else {
        this.gear_ratio = 0.0;
      }
      if (initObj.hasOwnProperty('config_bitmap')) {
        this.config_bitmap = initObj.config_bitmap
      }
      else {
        this.config_bitmap = 0;
      }
      if (initObj.hasOwnProperty('eth_ip_address')) {
        this.eth_ip_address = initObj.eth_ip_address
      }
      else {
        this.eth_ip_address = '';
      }
      if (initObj.hasOwnProperty('eth_port_number')) {
        this.eth_port_number = initObj.eth_port_number
      }
      else {
        this.eth_port_number = 0;
      }
      if (initObj.hasOwnProperty('eth_subnet_mask')) {
        this.eth_subnet_mask = initObj.eth_subnet_mask
      }
      else {
        this.eth_subnet_mask = '';
      }
      if (initObj.hasOwnProperty('eth_gateway')) {
        this.eth_gateway = initObj.eth_gateway
      }
      else {
        this.eth_gateway = '';
      }
    }
  }

  static serialize(obj, buffer, bufferOffset) {
    // Serializes a message object of type Configuration
    // Serialize message field [header]
    bufferOffset = std_msgs.msg.Header.serialize(obj.header, buffer, bufferOffset);
    // Serialize message field [teleop_x_vel_limit_mps]
    bufferOffset = _serializer.float32(obj.teleop_x_vel_limit_mps, buffer, bufferOffset);
    // Serialize message field [teleop_y_vel_limit_mps]
    bufferOffset = _serializer.float32(obj.teleop_y_vel_limit_mps, buffer, bufferOffset);
    // Serialize message field [teleop_accel_limit_mps2]
    bufferOffset = _serializer.float32(obj.teleop_accel_limit_mps2, buffer, bufferOffset);
    // Serialize message field [teleop_yaw_rate_limit_rps]
    bufferOffset = _serializer.float32(obj.teleop_yaw_rate_limit_rps, buffer, bufferOffset);
    // Serialize message field [teleop_yaw_accel_limit_rps2]
    bufferOffset = _serializer.float32(obj.teleop_yaw_accel_limit_rps2, buffer, bufferOffset);
    // Serialize message field [teleop_arm_vel_limit]
    bufferOffset = _serializer.float32(obj.teleop_arm_vel_limit, buffer, bufferOffset);
    // Serialize message field [teleop_pan_tilt_vel_limit]
    bufferOffset = _serializer.float32(obj.teleop_pan_tilt_vel_limit, buffer, bufferOffset);
    // Serialize message field [teleop_linear_actuator_vel_limit]
    bufferOffset = _serializer.float32(obj.teleop_linear_actuator_vel_limit, buffer, bufferOffset);
    // Serialize message field [x_vel_limit_mps]
    bufferOffset = _serializer.float32(obj.x_vel_limit_mps, buffer, bufferOffset);
    // Serialize message field [y_vel_limit_mps]
    bufferOffset = _serializer.float32(obj.y_vel_limit_mps, buffer, bufferOffset);
    // Serialize message field [accel_limit_mps2]
    bufferOffset = _serializer.float32(obj.accel_limit_mps2, buffer, bufferOffset);
    // Serialize message field [decel_limit_mps2]
    bufferOffset = _serializer.float32(obj.decel_limit_mps2, buffer, bufferOffset);
    // Serialize message field [dtz_decel_limit_mps2]
    bufferOffset = _serializer.float32(obj.dtz_decel_limit_mps2, buffer, bufferOffset);
    // Serialize message field [yaw_rate_limit_rps]
    bufferOffset = _serializer.float32(obj.yaw_rate_limit_rps, buffer, bufferOffset);
    // Serialize message field [yaw_accel_limit_rps2]
    bufferOffset = _serializer.float32(obj.yaw_accel_limit_rps2, buffer, bufferOffset);
    // Serialize message field [wheel_diameter_m]
    bufferOffset = _serializer.float32(obj.wheel_diameter_m, buffer, bufferOffset);
    // Serialize message field [wheelbase_length_m]
    bufferOffset = _serializer.float32(obj.wheelbase_length_m, buffer, bufferOffset);
    // Serialize message field [wheel_track_width_m]
    bufferOffset = _serializer.float32(obj.wheel_track_width_m, buffer, bufferOffset);
    // Serialize message field [gear_ratio]
    bufferOffset = _serializer.float32(obj.gear_ratio, buffer, bufferOffset);
    // Serialize message field [config_bitmap]
    bufferOffset = _serializer.uint32(obj.config_bitmap, buffer, bufferOffset);
    // Serialize message field [eth_ip_address]
    bufferOffset = _serializer.string(obj.eth_ip_address, buffer, bufferOffset);
    // Serialize message field [eth_port_number]
    bufferOffset = _serializer.uint32(obj.eth_port_number, buffer, bufferOffset);
    // Serialize message field [eth_subnet_mask]
    bufferOffset = _serializer.string(obj.eth_subnet_mask, buffer, bufferOffset);
    // Serialize message field [eth_gateway]
    bufferOffset = _serializer.string(obj.eth_gateway, buffer, bufferOffset);
    return bufferOffset;
  }

  static deserialize(buffer, bufferOffset=[0]) {
    //deserializes a message object of type Configuration
    let len;
    let data = new Configuration(null);
    // Deserialize message field [header]
    data.header = std_msgs.msg.Header.deserialize(buffer, bufferOffset);
    // Deserialize message field [teleop_x_vel_limit_mps]
    data.teleop_x_vel_limit_mps = _deserializer.float32(buffer, bufferOffset);
    // Deserialize message field [teleop_y_vel_limit_mps]
    data.teleop_y_vel_limit_mps = _deserializer.float32(buffer, bufferOffset);
    // Deserialize message field [teleop_accel_limit_mps2]
    data.teleop_accel_limit_mps2 = _deserializer.float32(buffer, bufferOffset);
    // Deserialize message field [teleop_yaw_rate_limit_rps]
    data.teleop_yaw_rate_limit_rps = _deserializer.float32(buffer, bufferOffset);
    // Deserialize message field [teleop_yaw_accel_limit_rps2]
    data.teleop_yaw_accel_limit_rps2 = _deserializer.float32(buffer, bufferOffset);
    // Deserialize message field [teleop_arm_vel_limit]
    data.teleop_arm_vel_limit = _deserializer.float32(buffer, bufferOffset);
    // Deserialize message field [teleop_pan_tilt_vel_limit]
    data.teleop_pan_tilt_vel_limit = _deserializer.float32(buffer, bufferOffset);
    // Deserialize message field [teleop_linear_actuator_vel_limit]
    data.teleop_linear_actuator_vel_limit = _deserializer.float32(buffer, bufferOffset);
    // Deserialize message field [x_vel_limit_mps]
    data.x_vel_limit_mps = _deserializer.float32(buffer, bufferOffset);
    // Deserialize message field [y_vel_limit_mps]
    data.y_vel_limit_mps = _deserializer.float32(buffer, bufferOffset);
    // Deserialize message field [accel_limit_mps2]
    data.accel_limit_mps2 = _deserializer.float32(buffer, bufferOffset);
    // Deserialize message field [decel_limit_mps2]
    data.decel_limit_mps2 = _deserializer.float32(buffer, bufferOffset);
    // Deserialize message field [dtz_decel_limit_mps2]
    data.dtz_decel_limit_mps2 = _deserializer.float32(buffer, bufferOffset);
    // Deserialize message field [yaw_rate_limit_rps]
    data.yaw_rate_limit_rps = _deserializer.float32(buffer, bufferOffset);
    // Deserialize message field [yaw_accel_limit_rps2]
    data.yaw_accel_limit_rps2 = _deserializer.float32(buffer, bufferOffset);
    // Deserialize message field [wheel_diameter_m]
    data.wheel_diameter_m = _deserializer.float32(buffer, bufferOffset);
    // Deserialize message field [wheelbase_length_m]
    data.wheelbase_length_m = _deserializer.float32(buffer, bufferOffset);
    // Deserialize message field [wheel_track_width_m]
    data.wheel_track_width_m = _deserializer.float32(buffer, bufferOffset);
    // Deserialize message field [gear_ratio]
    data.gear_ratio = _deserializer.float32(buffer, bufferOffset);
    // Deserialize message field [config_bitmap]
    data.config_bitmap = _deserializer.uint32(buffer, bufferOffset);
    // Deserialize message field [eth_ip_address]
    data.eth_ip_address = _deserializer.string(buffer, bufferOffset);
    // Deserialize message field [eth_port_number]
    data.eth_port_number = _deserializer.uint32(buffer, bufferOffset);
    // Deserialize message field [eth_subnet_mask]
    data.eth_subnet_mask = _deserializer.string(buffer, bufferOffset);
    // Deserialize message field [eth_gateway]
    data.eth_gateway = _deserializer.string(buffer, bufferOffset);
    return data;
  }

  static getMessageSize(object) {
    let length = 0;
    length += std_msgs.msg.Header.getMessageSize(object.header);
    length += _getByteLength(object.eth_ip_address);
    length += _getByteLength(object.eth_subnet_mask);
    length += _getByteLength(object.eth_gateway);
    return length + 96;
  }

  static datatype() {
    // Returns string type for a message object
    return 'movo_msgs/Configuration';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '536759dd91990ab5884786c2f0e531b0';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    Header header
    float32 teleop_x_vel_limit_mps
    float32 teleop_y_vel_limit_mps
    float32 teleop_accel_limit_mps2
    float32 teleop_yaw_rate_limit_rps
    float32 teleop_yaw_accel_limit_rps2
    float32 teleop_arm_vel_limit
    float32 teleop_pan_tilt_vel_limit
    float32 teleop_linear_actuator_vel_limit
    float32 x_vel_limit_mps
    float32 y_vel_limit_mps
    float32 accel_limit_mps2
    float32 decel_limit_mps2
    float32 dtz_decel_limit_mps2
    float32 yaw_rate_limit_rps
    float32 yaw_accel_limit_rps2
    float32 wheel_diameter_m
    float32 wheelbase_length_m
    float32 wheel_track_width_m
    float32 gear_ratio
    uint32 config_bitmap
    string eth_ip_address
    uint32 eth_port_number
    string eth_subnet_mask
    string eth_gateway
    
    
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
    const resolved = new Configuration(null);
    if (msg.header !== undefined) {
      resolved.header = std_msgs.msg.Header.Resolve(msg.header)
    }
    else {
      resolved.header = new std_msgs.msg.Header()
    }

    if (msg.teleop_x_vel_limit_mps !== undefined) {
      resolved.teleop_x_vel_limit_mps = msg.teleop_x_vel_limit_mps;
    }
    else {
      resolved.teleop_x_vel_limit_mps = 0.0
    }

    if (msg.teleop_y_vel_limit_mps !== undefined) {
      resolved.teleop_y_vel_limit_mps = msg.teleop_y_vel_limit_mps;
    }
    else {
      resolved.teleop_y_vel_limit_mps = 0.0
    }

    if (msg.teleop_accel_limit_mps2 !== undefined) {
      resolved.teleop_accel_limit_mps2 = msg.teleop_accel_limit_mps2;
    }
    else {
      resolved.teleop_accel_limit_mps2 = 0.0
    }

    if (msg.teleop_yaw_rate_limit_rps !== undefined) {
      resolved.teleop_yaw_rate_limit_rps = msg.teleop_yaw_rate_limit_rps;
    }
    else {
      resolved.teleop_yaw_rate_limit_rps = 0.0
    }

    if (msg.teleop_yaw_accel_limit_rps2 !== undefined) {
      resolved.teleop_yaw_accel_limit_rps2 = msg.teleop_yaw_accel_limit_rps2;
    }
    else {
      resolved.teleop_yaw_accel_limit_rps2 = 0.0
    }

    if (msg.teleop_arm_vel_limit !== undefined) {
      resolved.teleop_arm_vel_limit = msg.teleop_arm_vel_limit;
    }
    else {
      resolved.teleop_arm_vel_limit = 0.0
    }

    if (msg.teleop_pan_tilt_vel_limit !== undefined) {
      resolved.teleop_pan_tilt_vel_limit = msg.teleop_pan_tilt_vel_limit;
    }
    else {
      resolved.teleop_pan_tilt_vel_limit = 0.0
    }

    if (msg.teleop_linear_actuator_vel_limit !== undefined) {
      resolved.teleop_linear_actuator_vel_limit = msg.teleop_linear_actuator_vel_limit;
    }
    else {
      resolved.teleop_linear_actuator_vel_limit = 0.0
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

    if (msg.accel_limit_mps2 !== undefined) {
      resolved.accel_limit_mps2 = msg.accel_limit_mps2;
    }
    else {
      resolved.accel_limit_mps2 = 0.0
    }

    if (msg.decel_limit_mps2 !== undefined) {
      resolved.decel_limit_mps2 = msg.decel_limit_mps2;
    }
    else {
      resolved.decel_limit_mps2 = 0.0
    }

    if (msg.dtz_decel_limit_mps2 !== undefined) {
      resolved.dtz_decel_limit_mps2 = msg.dtz_decel_limit_mps2;
    }
    else {
      resolved.dtz_decel_limit_mps2 = 0.0
    }

    if (msg.yaw_rate_limit_rps !== undefined) {
      resolved.yaw_rate_limit_rps = msg.yaw_rate_limit_rps;
    }
    else {
      resolved.yaw_rate_limit_rps = 0.0
    }

    if (msg.yaw_accel_limit_rps2 !== undefined) {
      resolved.yaw_accel_limit_rps2 = msg.yaw_accel_limit_rps2;
    }
    else {
      resolved.yaw_accel_limit_rps2 = 0.0
    }

    if (msg.wheel_diameter_m !== undefined) {
      resolved.wheel_diameter_m = msg.wheel_diameter_m;
    }
    else {
      resolved.wheel_diameter_m = 0.0
    }

    if (msg.wheelbase_length_m !== undefined) {
      resolved.wheelbase_length_m = msg.wheelbase_length_m;
    }
    else {
      resolved.wheelbase_length_m = 0.0
    }

    if (msg.wheel_track_width_m !== undefined) {
      resolved.wheel_track_width_m = msg.wheel_track_width_m;
    }
    else {
      resolved.wheel_track_width_m = 0.0
    }

    if (msg.gear_ratio !== undefined) {
      resolved.gear_ratio = msg.gear_ratio;
    }
    else {
      resolved.gear_ratio = 0.0
    }

    if (msg.config_bitmap !== undefined) {
      resolved.config_bitmap = msg.config_bitmap;
    }
    else {
      resolved.config_bitmap = 0
    }

    if (msg.eth_ip_address !== undefined) {
      resolved.eth_ip_address = msg.eth_ip_address;
    }
    else {
      resolved.eth_ip_address = ''
    }

    if (msg.eth_port_number !== undefined) {
      resolved.eth_port_number = msg.eth_port_number;
    }
    else {
      resolved.eth_port_number = 0
    }

    if (msg.eth_subnet_mask !== undefined) {
      resolved.eth_subnet_mask = msg.eth_subnet_mask;
    }
    else {
      resolved.eth_subnet_mask = ''
    }

    if (msg.eth_gateway !== undefined) {
      resolved.eth_gateway = msg.eth_gateway;
    }
    else {
      resolved.eth_gateway = ''
    }

    return resolved;
    }
};

module.exports = Configuration;
