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

class PVA {
  constructor(initObj={}) {
    if (initObj === null) {
      // initObj === null is a special case for deserialization where we don't initialize fields
      this.pos_rad = null;
      this.vel_rps = null;
      this.acc_rps2 = null;
    }
    else {
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
      if (initObj.hasOwnProperty('acc_rps2')) {
        this.acc_rps2 = initObj.acc_rps2
      }
      else {
        this.acc_rps2 = 0.0;
      }
    }
  }

  static serialize(obj, buffer, bufferOffset) {
    // Serializes a message object of type PVA
    // Serialize message field [pos_rad]
    bufferOffset = _serializer.float32(obj.pos_rad, buffer, bufferOffset);
    // Serialize message field [vel_rps]
    bufferOffset = _serializer.float32(obj.vel_rps, buffer, bufferOffset);
    // Serialize message field [acc_rps2]
    bufferOffset = _serializer.float32(obj.acc_rps2, buffer, bufferOffset);
    return bufferOffset;
  }

  static deserialize(buffer, bufferOffset=[0]) {
    //deserializes a message object of type PVA
    let len;
    let data = new PVA(null);
    // Deserialize message field [pos_rad]
    data.pos_rad = _deserializer.float32(buffer, bufferOffset);
    // Deserialize message field [vel_rps]
    data.vel_rps = _deserializer.float32(buffer, bufferOffset);
    // Deserialize message field [acc_rps2]
    data.acc_rps2 = _deserializer.float32(buffer, bufferOffset);
    return data;
  }

  static getMessageSize(object) {
    return 12;
  }

  static datatype() {
    // Returns string type for a message object
    return 'movo_msgs/PVA';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '4bd83bfa12f6251a7bb7637ad4ccd5d0';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
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
    const resolved = new PVA(null);
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

    if (msg.acc_rps2 !== undefined) {
      resolved.acc_rps2 = msg.acc_rps2;
    }
    else {
      resolved.acc_rps2 = 0.0
    }

    return resolved;
    }
};

module.exports = PVA;
