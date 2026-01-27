;; Auto-generated. Do not edit!


(when (boundp 'movo_msgs::PanTiltCmd)
  (if (not (find-package "MOVO_MSGS"))
    (make-package "MOVO_MSGS"))
  (shadow 'PanTiltCmd (find-package "MOVO_MSGS")))
(unless (find-package "MOVO_MSGS::PANTILTCMD")
  (make-package "MOVO_MSGS::PANTILTCMD"))

(in-package "ROS")
;;//! \htmlinclude PanTiltCmd.msg.html
(if (not (find-package "STD_MSGS"))
  (ros::roseus-add-msgs "std_msgs"))


(defclass movo_msgs::PanTiltCmd
  :super ros::object
  :slots (_header _pan_cmd _tilt_cmd ))

(defmethod movo_msgs::PanTiltCmd
  (:init
   (&key
    ((:header __header) (instance std_msgs::Header :init))
    ((:pan_cmd __pan_cmd) (instance movo_msgs::PVA :init))
    ((:tilt_cmd __tilt_cmd) (instance movo_msgs::PVA :init))
    )
   (send-super :init)
   (setq _header __header)
   (setq _pan_cmd __pan_cmd)
   (setq _tilt_cmd __tilt_cmd)
   self)
  (:header
   (&rest __header)
   (if (keywordp (car __header))
       (send* _header __header)
     (progn
       (if __header (setq _header (car __header)))
       _header)))
  (:pan_cmd
   (&rest __pan_cmd)
   (if (keywordp (car __pan_cmd))
       (send* _pan_cmd __pan_cmd)
     (progn
       (if __pan_cmd (setq _pan_cmd (car __pan_cmd)))
       _pan_cmd)))
  (:tilt_cmd
   (&rest __tilt_cmd)
   (if (keywordp (car __tilt_cmd))
       (send* _tilt_cmd __tilt_cmd)
     (progn
       (if __tilt_cmd (setq _tilt_cmd (car __tilt_cmd)))
       _tilt_cmd)))
  (:serialization-length
   ()
   (+
    ;; std_msgs/Header _header
    (send _header :serialization-length)
    ;; movo_msgs/PVA _pan_cmd
    (send _pan_cmd :serialization-length)
    ;; movo_msgs/PVA _tilt_cmd
    (send _tilt_cmd :serialization-length)
    ))
  (:serialize
   (&optional strm)
   (let ((s (if strm strm
              (make-string-output-stream (send self :serialization-length)))))
     ;; std_msgs/Header _header
       (send _header :serialize s)
     ;; movo_msgs/PVA _pan_cmd
       (send _pan_cmd :serialize s)
     ;; movo_msgs/PVA _tilt_cmd
       (send _tilt_cmd :serialize s)
     ;;
     (if (null strm) (get-output-stream-string s))))
  (:deserialize
   (buf &optional (ptr- 0))
   ;; std_msgs/Header _header
     (send _header :deserialize buf ptr-) (incf ptr- (send _header :serialization-length))
   ;; movo_msgs/PVA _pan_cmd
     (send _pan_cmd :deserialize buf ptr-) (incf ptr- (send _pan_cmd :serialization-length))
   ;; movo_msgs/PVA _tilt_cmd
     (send _tilt_cmd :deserialize buf ptr-) (incf ptr- (send _tilt_cmd :serialization-length))
   ;;
   self)
  )

(setf (get movo_msgs::PanTiltCmd :md5sum-) "1c8fd5bfa9f9bb5673655828791c82ce")
(setf (get movo_msgs::PanTiltCmd :datatype-) "movo_msgs/PanTiltCmd")
(setf (get movo_msgs::PanTiltCmd :definition-)
      "Header header
PVA pan_cmd
PVA tilt_cmd

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
MSG: movo_msgs/PVA
float32 pos_rad
float32 vel_rps
float32 acc_rps2

")



(provide :movo_msgs/PanTiltCmd "1c8fd5bfa9f9bb5673655828791c82ce")


