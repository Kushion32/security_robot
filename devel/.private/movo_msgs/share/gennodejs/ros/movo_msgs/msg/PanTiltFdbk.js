// Auto-generated. Do not edit!

// (in-package movo_msgs.msg)


"use strict";

const _serializer = _ros_msg_utils.Serialize;
const _arraySerializer = _serializer.Array;
const _deserializer = _ros_msg_utils.Deserialize;
const _arrayDeserializer = _deserializer.Array;
const _finder = _ros_msg_utils.Find;
const _getByteLength = _ros_msg_utils.getByteLength;
let PanTiltActuatorFdbk = require('./PanTiltActuatorFdbk.js');
let std_msgs = _finder('std_msgs');

//-----------------------------------------------------------

class PanTiltFdbk {
  constructor(initObj={}) {
    if (initObj === null) {
      // initObj === null is a special case for deserialization where we don't initialize fields
      this.header = null;
      this.pan = null;
      this.tilt = null;
    }
    else {
      if (initObj.hasOwnProperty('header')) {
        this.header = initObj.header
      }
      else {
        this.header = new std_msgs.msg.Header();
      }
      if (initObj.hasOwnProperty('pan')) {
        this.pan = initObj.pan
      }
      else {
        this.pan = new PanTiltActuatorFdbk();
      }
      if (initObj.hasOwnProperty('tilt')) {
        this.tilt = initObj.tilt
      }
      else {
        this.tilt = new PanTiltActuatorFdbk();
      }
    }
  }

  static serialize(obj, buffer, bufferOffset) {
    // Serializes a message object of type PanTiltFdbk
    // Serialize message field [header]
    bufferOffset = std_msgs.msg.Header.serialize(obj.header, buffer, bufferOffset);
    // Serialize message field [pan]
    bufferOffset = PanTiltActuatorFdbk.serialize(obj.pan, buffer, bufferOffset);
    // Serialize message field [tilt]
    bufferOffset = PanTiltActuatorFdbk.serialize(obj.tilt, buffer, bufferOffset);
    return bufferOffset;
  }

  static deserialize(buffer, bufferOffset=[0]) {
    //deserializes a message object of type PanTiltFdbk
    let len;
    let data = new PanTiltFdbk(null);
    // Deserialize message field [header]
    data.header = std_msgs.msg.Header.deserialize(buffer, bufferOffset);
    // Deserialize message field [pan]
    data.pan = PanTiltActuatorFdbk.deserialize(buffer, bufferOffset);
    // Deserialize message field [tilt]
    data.tilt = PanTiltActuatorFdbk.deserialize(buffer, bufferOffset);
    return data;
  }

  static getMessageSize(object) {
    let length = 0;
    length += std_msgs.msg.Header.getMessageSize(object.header);
    length += PanTiltActuatorFdbk.getMessageSize(object.pan);
    length += PanTiltActuatorFdbk.getMessageSize(object.tilt);
    return length;
  }

  static datatype() {
    // Returns string type for a message object
    return 'movo_msgs/PanTiltFdbk';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'c294813db952ac45feb2086fe22222ab';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    Header header
    PanTiltActuatorFdbk pan
    PanTiltActuatorFdbk tilt
    
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
    MSG: movo_msgs/PanTiltActuatorFdbk
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
    const resolved = new PanTiltFdbk(null);
    if (msg.header !== undefined) {
      resolved.header = std_msgs.msg.Header.Resolve(msg.header)
    }
    else {
      resolved.header = new std_msgs.msg.Header()
    }

    if (msg.pan !== undefined) {
      resolved.pan = PanTiltActuatorFdbk.Resolve(msg.pan)
    }
    else {
      resolved.pan = new PanTiltActuatorFdbk()
    }

    if (msg.tilt !== undefined) {
      resolved.tilt = PanTiltActuatorFdbk.Resolve(msg.tilt)
    }
    else {
      resolved.tilt = new PanTiltActuatorFdbk()
    }

    return resolved;
    }
};

module.exports = PanTiltFdbk;
