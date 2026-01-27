;; Auto-generated. Do not edit!


(when (boundp 'movo_msgs::PVA)
  (if (not (find-package "MOVO_MSGS"))
    (make-package "MOVO_MSGS"))
  (shadow 'PVA (find-package "MOVO_MSGS")))
(unless (find-package "MOVO_MSGS::PVA")
  (make-package "MOVO_MSGS::PVA"))

(in-package "ROS")
;;//! \htmlinclude PVA.msg.html


(defclass movo_msgs::PVA
  :super ros::object
  :slots (_pos_rad _vel_rps _acc_rps2 ))

(defmethod movo_msgs::PVA
  (:init
   (&key
    ((:pos_rad __pos_rad) 0.0)
    ((:vel_rps __vel_rps) 0.0)
    ((:acc_rps2 __acc_rps2) 0.0)
    )
   (send-super :init)
   (setq _pos_rad (float __pos_rad))
   (setq _vel_rps (float __vel_rps))
   (setq _acc_rps2 (float __acc_rps2))
   self)
  (:pos_rad
   (&optional __pos_rad)
   (if __pos_rad (setq _pos_rad __pos_rad)) _pos_rad)
  (:vel_rps
   (&optional __vel_rps)
   (if __vel_rps (setq _vel_rps __vel_rps)) _vel_rps)
  (:acc_rps2
   (&optional __acc_rps2)
   (if __acc_rps2 (setq _acc_rps2 __acc_rps2)) _acc_rps2)
  (:serialization-length
   ()
   (+
    ;; float32 _pos_rad
    4
    ;; float32 _vel_rps
    4
    ;; float32 _acc_rps2
    4
    ))
  (:serialize
   (&optional strm)
   (let ((s (if strm strm
              (make-string-output-stream (send self :serialization-length)))))
     ;; float32 _pos_rad
       (sys::poke _pos_rad (send s :buffer) (send s :count) :float) (incf (stream-count s) 4)
     ;; float32 _vel_rps
       (sys::poke _vel_rps (send s :buffer) (send s :count) :float) (incf (stream-count s) 4)
     ;; float32 _acc_rps2
       (sys::poke _acc_rps2 (send s :buffer) (send s :count) :float) (incf (stream-count s) 4)
     ;;
     (if (null strm) (get-output-stream-string s))))
  (:deserialize
   (buf &optional (ptr- 0))
   ;; float32 _pos_rad
     (setq _pos_rad (sys::peek buf ptr- :float)) (incf ptr- 4)
   ;; float32 _vel_rps
     (setq _vel_rps (sys::peek buf ptr- :float)) (incf ptr- 4)
   ;; float32 _acc_rps2
     (setq _acc_rps2 (sys::peek buf ptr- :float)) (incf ptr- 4)
   ;;
   self)
  )

(setf (get movo_msgs::PVA :md5sum-) "4bd83bfa12f6251a7bb7637ad4ccd5d0")
(setf (get movo_msgs::PVA :datatype-) "movo_msgs/PVA")
(setf (get movo_msgs::PVA :definition-)
      "float32 pos_rad
float32 vel_rps
float32 acc_rps2

")



(provide :movo_msgs/PVA "4bd83bfa12f6251a7bb7637ad4ccd5d0")


