;; Auto-generated. Do not edit!


(when (boundp 'movo_msgs::JacoStatus)
  (if (not (find-package "MOVO_MSGS"))
    (make-package "MOVO_MSGS"))
  (shadow 'JacoStatus (find-package "MOVO_MSGS")))
(unless (find-package "MOVO_MSGS::JACOSTATUS")
  (make-package "MOVO_MSGS::JACOSTATUS"))

(in-package "ROS")
;;//! \htmlinclude JacoStatus.msg.html
(if (not (find-package "STD_MSGS"))
  (ros::roseus-add-msgs "std_msgs"))


(defclass movo_msgs::JacoStatus
  :super ros::object
  :slots (_header _raw_joint_pos_rad ))

(defmethod movo_msgs::JacoStatus
  (:init
   (&key
    ((:header __header) (instance std_msgs::Header :init))
    ((:raw_joint_pos_rad __raw_joint_pos_rad) (make-array 0 :initial-element 0.0 :element-type :float))
    )
   (send-super :init)
   (setq _header __header)
   (setq _raw_joint_pos_rad __raw_joint_pos_rad)
   self)
  (:header
   (&rest __header)
   (if (keywordp (car __header))
       (send* _header __header)
     (progn
       (if __header (setq _header (car __header)))
       _header)))
  (:raw_joint_pos_rad
   (&optional __raw_joint_pos_rad)
   (if __raw_joint_pos_rad (setq _raw_joint_pos_rad __raw_joint_pos_rad)) _raw_joint_pos_rad)
  (:serialization-length
   ()
   (+
    ;; std_msgs/Header _header
    (send _header :serialization-length)
    ;; float32[] _raw_joint_pos_rad
    (* 4    (length _raw_joint_pos_rad)) 4
    ))
  (:serialize
   (&optional strm)
   (let ((s (if strm strm
              (make-string-output-stream (send self :serialization-length)))))
     ;; std_msgs/Header _header
       (send _header :serialize s)
     ;; float32[] _raw_joint_pos_rad
     (write-long (length _raw_joint_pos_rad) s)
     (dotimes (i (length _raw_joint_pos_rad))
       (sys::poke (elt _raw_joint_pos_rad i) (send s :buffer) (send s :count) :float) (incf (stream-count s) 4)
       )
     ;;
     (if (null strm) (get-output-stream-string s))))
  (:deserialize
   (buf &optional (ptr- 0))
   ;; std_msgs/Header _header
     (send _header :deserialize buf ptr-) (incf ptr- (send _header :serialization-length))
   ;; float32[] _raw_joint_pos_rad
   (let (n)
     (setq n (sys::peek buf ptr- :integer)) (incf ptr- 4)
     (setq _raw_joint_pos_rad (instantiate float-vector n))
     (dotimes (i n)
     (setf (elt _raw_joint_pos_rad i) (sys::peek buf ptr- :float)) (incf ptr- 4)
     ))
   ;;
   self)
  )

(setf (get movo_msgs::JacoStatus :md5sum-) "d7737d010f68dc207c2b507e374ae436")
(setf (get movo_msgs::JacoStatus :datatype-) "movo_msgs/JacoStatus")
(setf (get movo_msgs::JacoStatus :definition-)
      "Header header
float32[] raw_joint_pos_rad

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

")



(provide :movo_msgs/JacoStatus "d7737d010f68dc207c2b507e374ae436")


