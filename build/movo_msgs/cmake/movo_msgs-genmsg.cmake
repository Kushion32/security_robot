# generated from genmsg/cmake/pkg-genmsg.cmake.em

message(STATUS "movo_msgs: 20 messages, 0 services")

set(MSG_I_FLAGS "-Imovo_msgs:/home/krish/catkin_ws/src/kinova-movo/movo_common/movo_msgs/msg;-Istd_msgs:/opt/ros/noetic/share/std_msgs/cmake/../msg;-Igeometry_msgs:/opt/ros/noetic/share/geometry_msgs/cmake/../msg")

# Find all generators
find_package(gencpp REQUIRED)
find_package(geneus REQUIRED)
find_package(genlisp REQUIRED)
find_package(gennodejs REQUIRED)
find_package(genpy REQUIRED)

add_custom_target(movo_msgs_generate_messages ALL)

# verify that message/service dependencies have not changed since configure



get_filename_component(_filename "/home/krish/catkin_ws/src/kinova-movo/movo_common/movo_msgs/msg/ConfigCmd.msg" NAME_WE)
add_custom_target(_movo_msgs_generate_messages_check_deps_${_filename}
  COMMAND ${CATKIN_ENV} ${PYTHON_EXECUTABLE} ${GENMSG_CHECK_DEPS_SCRIPT} "movo_msgs" "/home/krish/catkin_ws/src/kinova-movo/movo_common/movo_msgs/msg/ConfigCmd.msg" "std_msgs/Header"
)

get_filename_component(_filename "/home/krish/catkin_ws/src/kinova-movo/movo_common/movo_msgs/msg/Battery.msg" NAME_WE)
add_custom_target(_movo_msgs_generate_messages_check_deps_${_filename}
  COMMAND ${CATKIN_ENV} ${PYTHON_EXECUTABLE} ${GENMSG_CHECK_DEPS_SCRIPT} "movo_msgs" "/home/krish/catkin_ws/src/kinova-movo/movo_common/movo_msgs/msg/Battery.msg" "std_msgs/Header"
)

get_filename_component(_filename "/home/krish/catkin_ws/src/kinova-movo/movo_common/movo_msgs/msg/Status.msg" NAME_WE)
add_custom_target(_movo_msgs_generate_messages_check_deps_${_filename}
  COMMAND ${CATKIN_ENV} ${PYTHON_EXECUTABLE} ${GENMSG_CHECK_DEPS_SCRIPT} "movo_msgs" "/home/krish/catkin_ws/src/kinova-movo/movo_common/movo_msgs/msg/Status.msg" "std_msgs/Header"
)

get_filename_component(_filename "/home/krish/catkin_ws/src/kinova-movo/movo_common/movo_msgs/msg/Propulsion.msg" NAME_WE)
add_custom_target(_movo_msgs_generate_messages_check_deps_${_filename}
  COMMAND ${CATKIN_ENV} ${PYTHON_EXECUTABLE} ${GENMSG_CHECK_DEPS_SCRIPT} "movo_msgs" "/home/krish/catkin_ws/src/kinova-movo/movo_common/movo_msgs/msg/Propulsion.msg" "std_msgs/Header"
)

get_filename_component(_filename "/home/krish/catkin_ws/src/kinova-movo/movo_common/movo_msgs/msg/Dynamics.msg" NAME_WE)
add_custom_target(_movo_msgs_generate_messages_check_deps_${_filename}
  COMMAND ${CATKIN_ENV} ${PYTHON_EXECUTABLE} ${GENMSG_CHECK_DEPS_SCRIPT} "movo_msgs" "/home/krish/catkin_ws/src/kinova-movo/movo_common/movo_msgs/msg/Dynamics.msg" "std_msgs/Header"
)

get_filename_component(_filename "/home/krish/catkin_ws/src/kinova-movo/movo_common/movo_msgs/msg/Configuration.msg" NAME_WE)
add_custom_target(_movo_msgs_generate_messages_check_deps_${_filename}
  COMMAND ${CATKIN_ENV} ${PYTHON_EXECUTABLE} ${GENMSG_CHECK_DEPS_SCRIPT} "movo_msgs" "/home/krish/catkin_ws/src/kinova-movo/movo_common/movo_msgs/msg/Configuration.msg" "std_msgs/Header"
)

get_filename_component(_filename "/home/krish/catkin_ws/src/kinova-movo/movo_common/movo_msgs/msg/CtlParams.msg" NAME_WE)
add_custom_target(_movo_msgs_generate_messages_check_deps_${_filename}
  COMMAND ${CATKIN_ENV} ${PYTHON_EXECUTABLE} ${GENMSG_CHECK_DEPS_SCRIPT} "movo_msgs" "/home/krish/catkin_ws/src/kinova-movo/movo_common/movo_msgs/msg/CtlParams.msg" "std_msgs/Header"
)

get_filename_component(_filename "/home/krish/catkin_ws/src/kinova-movo/movo_common/movo_msgs/msg/Faultlog.msg" NAME_WE)
add_custom_target(_movo_msgs_generate_messages_check_deps_${_filename}
  COMMAND ${CATKIN_ENV} ${PYTHON_EXECUTABLE} ${GENMSG_CHECK_DEPS_SCRIPT} "movo_msgs" "/home/krish/catkin_ws/src/kinova-movo/movo_common/movo_msgs/msg/Faultlog.msg" ""
)

get_filename_component(_filename "/home/krish/catkin_ws/src/kinova-movo/movo_common/movo_msgs/msg/JacoJointCmd.msg" NAME_WE)
add_custom_target(_movo_msgs_generate_messages_check_deps_${_filename}
  COMMAND ${CATKIN_ENV} ${PYTHON_EXECUTABLE} ${GENMSG_CHECK_DEPS_SCRIPT} "movo_msgs" "/home/krish/catkin_ws/src/kinova-movo/movo_common/movo_msgs/msg/JacoJointCmd.msg" "std_msgs/Header"
)

get_filename_component(_filename "/home/krish/catkin_ws/src/kinova-movo/movo_common/movo_msgs/msg/JacoStatus.msg" NAME_WE)
add_custom_target(_movo_msgs_generate_messages_check_deps_${_filename}
  COMMAND ${CATKIN_ENV} ${PYTHON_EXECUTABLE} ${GENMSG_CHECK_DEPS_SCRIPT} "movo_msgs" "/home/krish/catkin_ws/src/kinova-movo/movo_common/movo_msgs/msg/JacoStatus.msg" "std_msgs/Header"
)

get_filename_component(_filename "/home/krish/catkin_ws/src/kinova-movo/movo_common/movo_msgs/msg/GripperCmd.msg" NAME_WE)
add_custom_target(_movo_msgs_generate_messages_check_deps_${_filename}
  COMMAND ${CATKIN_ENV} ${PYTHON_EXECUTABLE} ${GENMSG_CHECK_DEPS_SCRIPT} "movo_msgs" "/home/krish/catkin_ws/src/kinova-movo/movo_common/movo_msgs/msg/GripperCmd.msg" ""
)

get_filename_component(_filename "/home/krish/catkin_ws/src/kinova-movo/movo_common/movo_msgs/msg/GripperStat.msg" NAME_WE)
add_custom_target(_movo_msgs_generate_messages_check_deps_${_filename}
  COMMAND ${CATKIN_ENV} ${PYTHON_EXECUTABLE} ${GENMSG_CHECK_DEPS_SCRIPT} "movo_msgs" "/home/krish/catkin_ws/src/kinova-movo/movo_common/movo_msgs/msg/GripperStat.msg" "std_msgs/Header"
)

get_filename_component(_filename "/home/krish/catkin_ws/src/kinova-movo/movo_common/movo_msgs/msg/LinearActuatorCmd.msg" NAME_WE)
add_custom_target(_movo_msgs_generate_messages_check_deps_${_filename}
  COMMAND ${CATKIN_ENV} ${PYTHON_EXECUTABLE} ${GENMSG_CHECK_DEPS_SCRIPT} "movo_msgs" "/home/krish/catkin_ws/src/kinova-movo/movo_common/movo_msgs/msg/LinearActuatorCmd.msg" "std_msgs/Header"
)

get_filename_component(_filename "/home/krish/catkin_ws/src/kinova-movo/movo_common/movo_msgs/msg/JacoCartesianVelocityCmd.msg" NAME_WE)
add_custom_target(_movo_msgs_generate_messages_check_deps_${_filename}
  COMMAND ${CATKIN_ENV} ${PYTHON_EXECUTABLE} ${GENMSG_CHECK_DEPS_SCRIPT} "movo_msgs" "/home/krish/catkin_ws/src/kinova-movo/movo_common/movo_msgs/msg/JacoCartesianVelocityCmd.msg" "std_msgs/Header"
)

get_filename_component(_filename "/home/krish/catkin_ws/src/kinova-movo/movo_common/movo_msgs/msg/MotionTestCmd.msg" NAME_WE)
add_custom_target(_movo_msgs_generate_messages_check_deps_${_filename}
  COMMAND ${CATKIN_ENV} ${PYTHON_EXECUTABLE} ${GENMSG_CHECK_DEPS_SCRIPT} "movo_msgs" "/home/krish/catkin_ws/src/kinova-movo/movo_common/movo_msgs/msg/MotionTestCmd.msg" ""
)

get_filename_component(_filename "/home/krish/catkin_ws/src/kinova-movo/movo_common/movo_msgs/msg/KinovaActuatorFdbk.msg" NAME_WE)
add_custom_target(_movo_msgs_generate_messages_check_deps_${_filename}
  COMMAND ${CATKIN_ENV} ${PYTHON_EXECUTABLE} ${GENMSG_CHECK_DEPS_SCRIPT} "movo_msgs" "/home/krish/catkin_ws/src/kinova-movo/movo_common/movo_msgs/msg/KinovaActuatorFdbk.msg" "std_msgs/Header"
)

get_filename_component(_filename "/home/krish/catkin_ws/src/kinova-movo/movo_common/movo_msgs/msg/PanTiltActuatorFdbk.msg" NAME_WE)
add_custom_target(_movo_msgs_generate_messages_check_deps_${_filename}
  COMMAND ${CATKIN_ENV} ${PYTHON_EXECUTABLE} ${GENMSG_CHECK_DEPS_SCRIPT} "movo_msgs" "/home/krish/catkin_ws/src/kinova-movo/movo_common/movo_msgs/msg/PanTiltActuatorFdbk.msg" "std_msgs/Header:geometry_msgs/Vector3"
)

get_filename_component(_filename "/home/krish/catkin_ws/src/kinova-movo/movo_common/movo_msgs/msg/PVA.msg" NAME_WE)
add_custom_target(_movo_msgs_generate_messages_check_deps_${_filename}
  COMMAND ${CATKIN_ENV} ${PYTHON_EXECUTABLE} ${GENMSG_CHECK_DEPS_SCRIPT} "movo_msgs" "/home/krish/catkin_ws/src/kinova-movo/movo_common/movo_msgs/msg/PVA.msg" ""
)

get_filename_component(_filename "/home/krish/catkin_ws/src/kinova-movo/movo_common/movo_msgs/msg/PanTiltCmd.msg" NAME_WE)
add_custom_target(_movo_msgs_generate_messages_check_deps_${_filename}
  COMMAND ${CATKIN_ENV} ${PYTHON_EXECUTABLE} ${GENMSG_CHECK_DEPS_SCRIPT} "movo_msgs" "/home/krish/catkin_ws/src/kinova-movo/movo_common/movo_msgs/msg/PanTiltCmd.msg" "std_msgs/Header:movo_msgs/PVA"
)

get_filename_component(_filename "/home/krish/catkin_ws/src/kinova-movo/movo_common/movo_msgs/msg/PanTiltFdbk.msg" NAME_WE)
add_custom_target(_movo_msgs_generate_messages_check_deps_${_filename}
  COMMAND ${CATKIN_ENV} ${PYTHON_EXECUTABLE} ${GENMSG_CHECK_DEPS_SCRIPT} "movo_msgs" "/home/krish/catkin_ws/src/kinova-movo/movo_common/movo_msgs/msg/PanTiltFdbk.msg" "std_msgs/Header:movo_msgs/PanTiltActuatorFdbk:geometry_msgs/Vector3"
)

#
#  langs = gencpp;geneus;genlisp;gennodejs;genpy
#

### Section generating for lang: gencpp
### Generating Messages
_generate_msg_cpp(movo_msgs
  "/home/krish/catkin_ws/src/kinova-movo/movo_common/movo_msgs/msg/ConfigCmd.msg"
  "${MSG_I_FLAGS}"
  "/opt/ros/noetic/share/std_msgs/cmake/../msg/Header.msg"
  ${CATKIN_DEVEL_PREFIX}/${gencpp_INSTALL_DIR}/movo_msgs
)
_generate_msg_cpp(movo_msgs
  "/home/krish/catkin_ws/src/kinova-movo/movo_common/movo_msgs/msg/Battery.msg"
  "${MSG_I_FLAGS}"
  "/opt/ros/noetic/share/std_msgs/cmake/../msg/Header.msg"
  ${CATKIN_DEVEL_PREFIX}/${gencpp_INSTALL_DIR}/movo_msgs
)
_generate_msg_cpp(movo_msgs
  "/home/krish/catkin_ws/src/kinova-movo/movo_common/movo_msgs/msg/Status.msg"
  "${MSG_I_FLAGS}"
  "/opt/ros/noetic/share/std_msgs/cmake/../msg/Header.msg"
  ${CATKIN_DEVEL_PREFIX}/${gencpp_INSTALL_DIR}/movo_msgs
)
_generate_msg_cpp(movo_msgs
  "/home/krish/catkin_ws/src/kinova-movo/movo_common/movo_msgs/msg/Propulsion.msg"
  "${MSG_I_FLAGS}"
  "/opt/ros/noetic/share/std_msgs/cmake/../msg/Header.msg"
  ${CATKIN_DEVEL_PREFIX}/${gencpp_INSTALL_DIR}/movo_msgs
)
_generate_msg_cpp(movo_msgs
  "/home/krish/catkin_ws/src/kinova-movo/movo_common/movo_msgs/msg/Dynamics.msg"
  "${MSG_I_FLAGS}"
  "/opt/ros/noetic/share/std_msgs/cmake/../msg/Header.msg"
  ${CATKIN_DEVEL_PREFIX}/${gencpp_INSTALL_DIR}/movo_msgs
)
_generate_msg_cpp(movo_msgs
  "/home/krish/catkin_ws/src/kinova-movo/movo_common/movo_msgs/msg/Configuration.msg"
  "${MSG_I_FLAGS}"
  "/opt/ros/noetic/share/std_msgs/cmake/../msg/Header.msg"
  ${CATKIN_DEVEL_PREFIX}/${gencpp_INSTALL_DIR}/movo_msgs
)
_generate_msg_cpp(movo_msgs
  "/home/krish/catkin_ws/src/kinova-movo/movo_common/movo_msgs/msg/CtlParams.msg"
  "${MSG_I_FLAGS}"
  "/opt/ros/noetic/share/std_msgs/cmake/../msg/Header.msg"
  ${CATKIN_DEVEL_PREFIX}/${gencpp_INSTALL_DIR}/movo_msgs
)
_generate_msg_cpp(movo_msgs
  "/home/krish/catkin_ws/src/kinova-movo/movo_common/movo_msgs/msg/Faultlog.msg"
  "${MSG_I_FLAGS}"
  ""
  ${CATKIN_DEVEL_PREFIX}/${gencpp_INSTALL_DIR}/movo_msgs
)
_generate_msg_cpp(movo_msgs
  "/home/krish/catkin_ws/src/kinova-movo/movo_common/movo_msgs/msg/JacoJointCmd.msg"
  "${MSG_I_FLAGS}"
  "/opt/ros/noetic/share/std_msgs/cmake/../msg/Header.msg"
  ${CATKIN_DEVEL_PREFIX}/${gencpp_INSTALL_DIR}/movo_msgs
)
_generate_msg_cpp(movo_msgs
  "/home/krish/catkin_ws/src/kinova-movo/movo_common/movo_msgs/msg/JacoStatus.msg"
  "${MSG_I_FLAGS}"
  "/opt/ros/noetic/share/std_msgs/cmake/../msg/Header.msg"
  ${CATKIN_DEVEL_PREFIX}/${gencpp_INSTALL_DIR}/movo_msgs
)
_generate_msg_cpp(movo_msgs
  "/home/krish/catkin_ws/src/kinova-movo/movo_common/movo_msgs/msg/GripperCmd.msg"
  "${MSG_I_FLAGS}"
  ""
  ${CATKIN_DEVEL_PREFIX}/${gencpp_INSTALL_DIR}/movo_msgs
)
_generate_msg_cpp(movo_msgs
  "/home/krish/catkin_ws/src/kinova-movo/movo_common/movo_msgs/msg/GripperStat.msg"
  "${MSG_I_FLAGS}"
  "/opt/ros/noetic/share/std_msgs/cmake/../msg/Header.msg"
  ${CATKIN_DEVEL_PREFIX}/${gencpp_INSTALL_DIR}/movo_msgs
)
_generate_msg_cpp(movo_msgs
  "/home/krish/catkin_ws/src/kinova-movo/movo_common/movo_msgs/msg/LinearActuatorCmd.msg"
  "${MSG_I_FLAGS}"
  "/opt/ros/noetic/share/std_msgs/cmake/../msg/Header.msg"
  ${CATKIN_DEVEL_PREFIX}/${gencpp_INSTALL_DIR}/movo_msgs
)
_generate_msg_cpp(movo_msgs
  "/home/krish/catkin_ws/src/kinova-movo/movo_common/movo_msgs/msg/JacoCartesianVelocityCmd.msg"
  "${MSG_I_FLAGS}"
  "/opt/ros/noetic/share/std_msgs/cmake/../msg/Header.msg"
  ${CATKIN_DEVEL_PREFIX}/${gencpp_INSTALL_DIR}/movo_msgs
)
_generate_msg_cpp(movo_msgs
  "/home/krish/catkin_ws/src/kinova-movo/movo_common/movo_msgs/msg/MotionTestCmd.msg"
  "${MSG_I_FLAGS}"
  ""
  ${CATKIN_DEVEL_PREFIX}/${gencpp_INSTALL_DIR}/movo_msgs
)
_generate_msg_cpp(movo_msgs
  "/home/krish/catkin_ws/src/kinova-movo/movo_common/movo_msgs/msg/KinovaActuatorFdbk.msg"
  "${MSG_I_FLAGS}"
  "/opt/ros/noetic/share/std_msgs/cmake/../msg/Header.msg"
  ${CATKIN_DEVEL_PREFIX}/${gencpp_INSTALL_DIR}/movo_msgs
)
_generate_msg_cpp(movo_msgs
  "/home/krish/catkin_ws/src/kinova-movo/movo_common/movo_msgs/msg/PanTiltActuatorFdbk.msg"
  "${MSG_I_FLAGS}"
  "/opt/ros/noetic/share/std_msgs/cmake/../msg/Header.msg;/opt/ros/noetic/share/geometry_msgs/cmake/../msg/Vector3.msg"
  ${CATKIN_DEVEL_PREFIX}/${gencpp_INSTALL_DIR}/movo_msgs
)
_generate_msg_cpp(movo_msgs
  "/home/krish/catkin_ws/src/kinova-movo/movo_common/movo_msgs/msg/PVA.msg"
  "${MSG_I_FLAGS}"
  ""
  ${CATKIN_DEVEL_PREFIX}/${gencpp_INSTALL_DIR}/movo_msgs
)
_generate_msg_cpp(movo_msgs
  "/home/krish/catkin_ws/src/kinova-movo/movo_common/movo_msgs/msg/PanTiltCmd.msg"
  "${MSG_I_FLAGS}"
  "/opt/ros/noetic/share/std_msgs/cmake/../msg/Header.msg;/home/krish/catkin_ws/src/kinova-movo/movo_common/movo_msgs/msg/PVA.msg"
  ${CATKIN_DEVEL_PREFIX}/${gencpp_INSTALL_DIR}/movo_msgs
)
_generate_msg_cpp(movo_msgs
  "/home/krish/catkin_ws/src/kinova-movo/movo_common/movo_msgs/msg/PanTiltFdbk.msg"
  "${MSG_I_FLAGS}"
  "/opt/ros/noetic/share/std_msgs/cmake/../msg/Header.msg;/home/krish/catkin_ws/src/kinova-movo/movo_common/movo_msgs/msg/PanTiltActuatorFdbk.msg;/opt/ros/noetic/share/geometry_msgs/cmake/../msg/Vector3.msg"
  ${CATKIN_DEVEL_PREFIX}/${gencpp_INSTALL_DIR}/movo_msgs
)

### Generating Services

### Generating Module File
_generate_module_cpp(movo_msgs
  ${CATKIN_DEVEL_PREFIX}/${gencpp_INSTALL_DIR}/movo_msgs
  "${ALL_GEN_OUTPUT_FILES_cpp}"
)

add_custom_target(movo_msgs_generate_messages_cpp
  DEPENDS ${ALL_GEN_OUTPUT_FILES_cpp}
)
add_dependencies(movo_msgs_generate_messages movo_msgs_generate_messages_cpp)

# add dependencies to all check dependencies targets
get_filename_component(_filename "/home/krish/catkin_ws/src/kinova-movo/movo_common/movo_msgs/msg/ConfigCmd.msg" NAME_WE)
add_dependencies(movo_msgs_generate_messages_cpp _movo_msgs_generate_messages_check_deps_${_filename})
get_filename_component(_filename "/home/krish/catkin_ws/src/kinova-movo/movo_common/movo_msgs/msg/Battery.msg" NAME_WE)
add_dependencies(movo_msgs_generate_messages_cpp _movo_msgs_generate_messages_check_deps_${_filename})
get_filename_component(_filename "/home/krish/catkin_ws/src/kinova-movo/movo_common/movo_msgs/msg/Status.msg" NAME_WE)
add_dependencies(movo_msgs_generate_messages_cpp _movo_msgs_generate_messages_check_deps_${_filename})
get_filename_component(_filename "/home/krish/catkin_ws/src/kinova-movo/movo_common/movo_msgs/msg/Propulsion.msg" NAME_WE)
add_dependencies(movo_msgs_generate_messages_cpp _movo_msgs_generate_messages_check_deps_${_filename})
get_filename_component(_filename "/home/krish/catkin_ws/src/kinova-movo/movo_common/movo_msgs/msg/Dynamics.msg" NAME_WE)
add_dependencies(movo_msgs_generate_messages_cpp _movo_msgs_generate_messages_check_deps_${_filename})
get_filename_component(_filename "/home/krish/catkin_ws/src/kinova-movo/movo_common/movo_msgs/msg/Configuration.msg" NAME_WE)
add_dependencies(movo_msgs_generate_messages_cpp _movo_msgs_generate_messages_check_deps_${_filename})
get_filename_component(_filename "/home/krish/catkin_ws/src/kinova-movo/movo_common/movo_msgs/msg/CtlParams.msg" NAME_WE)
add_dependencies(movo_msgs_generate_messages_cpp _movo_msgs_generate_messages_check_deps_${_filename})
get_filename_component(_filename "/home/krish/catkin_ws/src/kinova-movo/movo_common/movo_msgs/msg/Faultlog.msg" NAME_WE)
add_dependencies(movo_msgs_generate_messages_cpp _movo_msgs_generate_messages_check_deps_${_filename})
get_filename_component(_filename "/home/krish/catkin_ws/src/kinova-movo/movo_common/movo_msgs/msg/JacoJointCmd.msg" NAME_WE)
add_dependencies(movo_msgs_generate_messages_cpp _movo_msgs_generate_messages_check_deps_${_filename})
get_filename_component(_filename "/home/krish/catkin_ws/src/kinova-movo/movo_common/movo_msgs/msg/JacoStatus.msg" NAME_WE)
add_dependencies(movo_msgs_generate_messages_cpp _movo_msgs_generate_messages_check_deps_${_filename})
get_filename_component(_filename "/home/krish/catkin_ws/src/kinova-movo/movo_common/movo_msgs/msg/GripperCmd.msg" NAME_WE)
add_dependencies(movo_msgs_generate_messages_cpp _movo_msgs_generate_messages_check_deps_${_filename})
get_filename_component(_filename "/home/krish/catkin_ws/src/kinova-movo/movo_common/movo_msgs/msg/GripperStat.msg" NAME_WE)
add_dependencies(movo_msgs_generate_messages_cpp _movo_msgs_generate_messages_check_deps_${_filename})
get_filename_component(_filename "/home/krish/catkin_ws/src/kinova-movo/movo_common/movo_msgs/msg/LinearActuatorCmd.msg" NAME_WE)
add_dependencies(movo_msgs_generate_messages_cpp _movo_msgs_generate_messages_check_deps_${_filename})
get_filename_component(_filename "/home/krish/catkin_ws/src/kinova-movo/movo_common/movo_msgs/msg/JacoCartesianVelocityCmd.msg" NAME_WE)
add_dependencies(movo_msgs_generate_messages_cpp _movo_msgs_generate_messages_check_deps_${_filename})
get_filename_component(_filename "/home/krish/catkin_ws/src/kinova-movo/movo_common/movo_msgs/msg/MotionTestCmd.msg" NAME_WE)
add_dependencies(movo_msgs_generate_messages_cpp _movo_msgs_generate_messages_check_deps_${_filename})
get_filename_component(_filename "/home/krish/catkin_ws/src/kinova-movo/movo_common/movo_msgs/msg/KinovaActuatorFdbk.msg" NAME_WE)
add_dependencies(movo_msgs_generate_messages_cpp _movo_msgs_generate_messages_check_deps_${_filename})
get_filename_component(_filename "/home/krish/catkin_ws/src/kinova-movo/movo_common/movo_msgs/msg/PanTiltActuatorFdbk.msg" NAME_WE)
add_dependencies(movo_msgs_generate_messages_cpp _movo_msgs_generate_messages_check_deps_${_filename})
get_filename_component(_filename "/home/krish/catkin_ws/src/kinova-movo/movo_common/movo_msgs/msg/PVA.msg" NAME_WE)
add_dependencies(movo_msgs_generate_messages_cpp _movo_msgs_generate_messages_check_deps_${_filename})
get_filename_component(_filename "/home/krish/catkin_ws/src/kinova-movo/movo_common/movo_msgs/msg/PanTiltCmd.msg" NAME_WE)
add_dependencies(movo_msgs_generate_messages_cpp _movo_msgs_generate_messages_check_deps_${_filename})
get_filename_component(_filename "/home/krish/catkin_ws/src/kinova-movo/movo_common/movo_msgs/msg/PanTiltFdbk.msg" NAME_WE)
add_dependencies(movo_msgs_generate_messages_cpp _movo_msgs_generate_messages_check_deps_${_filename})

# target for backward compatibility
add_custom_target(movo_msgs_gencpp)
add_dependencies(movo_msgs_gencpp movo_msgs_generate_messages_cpp)

# register target for catkin_package(EXPORTED_TARGETS)
list(APPEND ${PROJECT_NAME}_EXPORTED_TARGETS movo_msgs_generate_messages_cpp)

### Section generating for lang: geneus
### Generating Messages
_generate_msg_eus(movo_msgs
  "/home/krish/catkin_ws/src/kinova-movo/movo_common/movo_msgs/msg/ConfigCmd.msg"
  "${MSG_I_FLAGS}"
  "/opt/ros/noetic/share/std_msgs/cmake/../msg/Header.msg"
  ${CATKIN_DEVEL_PREFIX}/${geneus_INSTALL_DIR}/movo_msgs
)
_generate_msg_eus(movo_msgs
  "/home/krish/catkin_ws/src/kinova-movo/movo_common/movo_msgs/msg/Battery.msg"
  "${MSG_I_FLAGS}"
  "/opt/ros/noetic/share/std_msgs/cmake/../msg/Header.msg"
  ${CATKIN_DEVEL_PREFIX}/${geneus_INSTALL_DIR}/movo_msgs
)
_generate_msg_eus(movo_msgs
  "/home/krish/catkin_ws/src/kinova-movo/movo_common/movo_msgs/msg/Status.msg"
  "${MSG_I_FLAGS}"
  "/opt/ros/noetic/share/std_msgs/cmake/../msg/Header.msg"
  ${CATKIN_DEVEL_PREFIX}/${geneus_INSTALL_DIR}/movo_msgs
)
_generate_msg_eus(movo_msgs
  "/home/krish/catkin_ws/src/kinova-movo/movo_common/movo_msgs/msg/Propulsion.msg"
  "${MSG_I_FLAGS}"
  "/opt/ros/noetic/share/std_msgs/cmake/../msg/Header.msg"
  ${CATKIN_DEVEL_PREFIX}/${geneus_INSTALL_DIR}/movo_msgs
)
_generate_msg_eus(movo_msgs
  "/home/krish/catkin_ws/src/kinova-movo/movo_common/movo_msgs/msg/Dynamics.msg"
  "${MSG_I_FLAGS}"
  "/opt/ros/noetic/share/std_msgs/cmake/../msg/Header.msg"
  ${CATKIN_DEVEL_PREFIX}/${geneus_INSTALL_DIR}/movo_msgs
)
_generate_msg_eus(movo_msgs
  "/home/krish/catkin_ws/src/kinova-movo/movo_common/movo_msgs/msg/Configuration.msg"
  "${MSG_I_FLAGS}"
  "/opt/ros/noetic/share/std_msgs/cmake/../msg/Header.msg"
  ${CATKIN_DEVEL_PREFIX}/${geneus_INSTALL_DIR}/movo_msgs
)
_generate_msg_eus(movo_msgs
  "/home/krish/catkin_ws/src/kinova-movo/movo_common/movo_msgs/msg/CtlParams.msg"
  "${MSG_I_FLAGS}"
  "/opt/ros/noetic/share/std_msgs/cmake/../msg/Header.msg"
  ${CATKIN_DEVEL_PREFIX}/${geneus_INSTALL_DIR}/movo_msgs
)
_generate_msg_eus(movo_msgs
  "/home/krish/catkin_ws/src/kinova-movo/movo_common/movo_msgs/msg/Faultlog.msg"
  "${MSG_I_FLAGS}"
  ""
  ${CATKIN_DEVEL_PREFIX}/${geneus_INSTALL_DIR}/movo_msgs
)
_generate_msg_eus(movo_msgs
  "/home/krish/catkin_ws/src/kinova-movo/movo_common/movo_msgs/msg/JacoJointCmd.msg"
  "${MSG_I_FLAGS}"
  "/opt/ros/noetic/share/std_msgs/cmake/../msg/Header.msg"
  ${CATKIN_DEVEL_PREFIX}/${geneus_INSTALL_DIR}/movo_msgs
)
_generate_msg_eus(movo_msgs
  "/home/krish/catkin_ws/src/kinova-movo/movo_common/movo_msgs/msg/JacoStatus.msg"
  "${MSG_I_FLAGS}"
  "/opt/ros/noetic/share/std_msgs/cmake/../msg/Header.msg"
  ${CATKIN_DEVEL_PREFIX}/${geneus_INSTALL_DIR}/movo_msgs
)
_generate_msg_eus(movo_msgs
  "/home/krish/catkin_ws/src/kinova-movo/movo_common/movo_msgs/msg/GripperCmd.msg"
  "${MSG_I_FLAGS}"
  ""
  ${CATKIN_DEVEL_PREFIX}/${geneus_INSTALL_DIR}/movo_msgs
)
_generate_msg_eus(movo_msgs
  "/home/krish/catkin_ws/src/kinova-movo/movo_common/movo_msgs/msg/GripperStat.msg"
  "${MSG_I_FLAGS}"
  "/opt/ros/noetic/share/std_msgs/cmake/../msg/Header.msg"
  ${CATKIN_DEVEL_PREFIX}/${geneus_INSTALL_DIR}/movo_msgs
)
_generate_msg_eus(movo_msgs
  "/home/krish/catkin_ws/src/kinova-movo/movo_common/movo_msgs/msg/LinearActuatorCmd.msg"
  "${MSG_I_FLAGS}"
  "/opt/ros/noetic/share/std_msgs/cmake/../msg/Header.msg"
  ${CATKIN_DEVEL_PREFIX}/${geneus_INSTALL_DIR}/movo_msgs
)
_generate_msg_eus(movo_msgs
  "/home/krish/catkin_ws/src/kinova-movo/movo_common/movo_msgs/msg/JacoCartesianVelocityCmd.msg"
  "${MSG_I_FLAGS}"
  "/opt/ros/noetic/share/std_msgs/cmake/../msg/Header.msg"
  ${CATKIN_DEVEL_PREFIX}/${geneus_INSTALL_DIR}/movo_msgs
)
_generate_msg_eus(movo_msgs
  "/home/krish/catkin_ws/src/kinova-movo/movo_common/movo_msgs/msg/MotionTestCmd.msg"
  "${MSG_I_FLAGS}"
  ""
  ${CATKIN_DEVEL_PREFIX}/${geneus_INSTALL_DIR}/movo_msgs
)
_generate_msg_eus(movo_msgs
  "/home/krish/catkin_ws/src/kinova-movo/movo_common/movo_msgs/msg/KinovaActuatorFdbk.msg"
  "${MSG_I_FLAGS}"
  "/opt/ros/noetic/share/std_msgs/cmake/../msg/Header.msg"
  ${CATKIN_DEVEL_PREFIX}/${geneus_INSTALL_DIR}/movo_msgs
)
_generate_msg_eus(movo_msgs
  "/home/krish/catkin_ws/src/kinova-movo/movo_common/movo_msgs/msg/PanTiltActuatorFdbk.msg"
  "${MSG_I_FLAGS}"
  "/opt/ros/noetic/share/std_msgs/cmake/../msg/Header.msg;/opt/ros/noetic/share/geometry_msgs/cmake/../msg/Vector3.msg"
  ${CATKIN_DEVEL_PREFIX}/${geneus_INSTALL_DIR}/movo_msgs
)
_generate_msg_eus(movo_msgs
  "/home/krish/catkin_ws/src/kinova-movo/movo_common/movo_msgs/msg/PVA.msg"
  "${MSG_I_FLAGS}"
  ""
  ${CATKIN_DEVEL_PREFIX}/${geneus_INSTALL_DIR}/movo_msgs
)
_generate_msg_eus(movo_msgs
  "/home/krish/catkin_ws/src/kinova-movo/movo_common/movo_msgs/msg/PanTiltCmd.msg"
  "${MSG_I_FLAGS}"
  "/opt/ros/noetic/share/std_msgs/cmake/../msg/Header.msg;/home/krish/catkin_ws/src/kinova-movo/movo_common/movo_msgs/msg/PVA.msg"
  ${CATKIN_DEVEL_PREFIX}/${geneus_INSTALL_DIR}/movo_msgs
)
_generate_msg_eus(movo_msgs
  "/home/krish/catkin_ws/src/kinova-movo/movo_common/movo_msgs/msg/PanTiltFdbk.msg"
  "${MSG_I_FLAGS}"
  "/opt/ros/noetic/share/std_msgs/cmake/../msg/Header.msg;/home/krish/catkin_ws/src/kinova-movo/movo_common/movo_msgs/msg/PanTiltActuatorFdbk.msg;/opt/ros/noetic/share/geometry_msgs/cmake/../msg/Vector3.msg"
  ${CATKIN_DEVEL_PREFIX}/${geneus_INSTALL_DIR}/movo_msgs
)

### Generating Services

### Generating Module File
_generate_module_eus(movo_msgs
  ${CATKIN_DEVEL_PREFIX}/${geneus_INSTALL_DIR}/movo_msgs
  "${ALL_GEN_OUTPUT_FILES_eus}"
)

add_custom_target(movo_msgs_generate_messages_eus
  DEPENDS ${ALL_GEN_OUTPUT_FILES_eus}
)
add_dependencies(movo_msgs_generate_messages movo_msgs_generate_messages_eus)

# add dependencies to all check dependencies targets
get_filename_component(_filename "/home/krish/catkin_ws/src/kinova-movo/movo_common/movo_msgs/msg/ConfigCmd.msg" NAME_WE)
add_dependencies(movo_msgs_generate_messages_eus _movo_msgs_generate_messages_check_deps_${_filename})
get_filename_component(_filename "/home/krish/catkin_ws/src/kinova-movo/movo_common/movo_msgs/msg/Battery.msg" NAME_WE)
add_dependencies(movo_msgs_generate_messages_eus _movo_msgs_generate_messages_check_deps_${_filename})
get_filename_component(_filename "/home/krish/catkin_ws/src/kinova-movo/movo_common/movo_msgs/msg/Status.msg" NAME_WE)
add_dependencies(movo_msgs_generate_messages_eus _movo_msgs_generate_messages_check_deps_${_filename})
get_filename_component(_filename "/home/krish/catkin_ws/src/kinova-movo/movo_common/movo_msgs/msg/Propulsion.msg" NAME_WE)
add_dependencies(movo_msgs_generate_messages_eus _movo_msgs_generate_messages_check_deps_${_filename})
get_filename_component(_filename "/home/krish/catkin_ws/src/kinova-movo/movo_common/movo_msgs/msg/Dynamics.msg" NAME_WE)
add_dependencies(movo_msgs_generate_messages_eus _movo_msgs_generate_messages_check_deps_${_filename})
get_filename_component(_filename "/home/krish/catkin_ws/src/kinova-movo/movo_common/movo_msgs/msg/Configuration.msg" NAME_WE)
add_dependencies(movo_msgs_generate_messages_eus _movo_msgs_generate_messages_check_deps_${_filename})
get_filename_component(_filename "/home/krish/catkin_ws/src/kinova-movo/movo_common/movo_msgs/msg/CtlParams.msg" NAME_WE)
add_dependencies(movo_msgs_generate_messages_eus _movo_msgs_generate_messages_check_deps_${_filename})
get_filename_component(_filename "/home/krish/catkin_ws/src/kinova-movo/movo_common/movo_msgs/msg/Faultlog.msg" NAME_WE)
add_dependencies(movo_msgs_generate_messages_eus _movo_msgs_generate_messages_check_deps_${_filename})
get_filename_component(_filename "/home/krish/catkin_ws/src/kinova-movo/movo_common/movo_msgs/msg/JacoJointCmd.msg" NAME_WE)
add_dependencies(movo_msgs_generate_messages_eus _movo_msgs_generate_messages_check_deps_${_filename})
get_filename_component(_filename "/home/krish/catkin_ws/src/kinova-movo/movo_common/movo_msgs/msg/JacoStatus.msg" NAME_WE)
add_dependencies(movo_msgs_generate_messages_eus _movo_msgs_generate_messages_check_deps_${_filename})
get_filename_component(_filename "/home/krish/catkin_ws/src/kinova-movo/movo_common/movo_msgs/msg/GripperCmd.msg" NAME_WE)
add_dependencies(movo_msgs_generate_messages_eus _movo_msgs_generate_messages_check_deps_${_filename})
get_filename_component(_filename "/home/krish/catkin_ws/src/kinova-movo/movo_common/movo_msgs/msg/GripperStat.msg" NAME_WE)
add_dependencies(movo_msgs_generate_messages_eus _movo_msgs_generate_messages_check_deps_${_filename})
get_filename_component(_filename "/home/krish/catkin_ws/src/kinova-movo/movo_common/movo_msgs/msg/LinearActuatorCmd.msg" NAME_WE)
add_dependencies(movo_msgs_generate_messages_eus _movo_msgs_generate_messages_check_deps_${_filename})
get_filename_component(_filename "/home/krish/catkin_ws/src/kinova-movo/movo_common/movo_msgs/msg/JacoCartesianVelocityCmd.msg" NAME_WE)
add_dependencies(movo_msgs_generate_messages_eus _movo_msgs_generate_messages_check_deps_${_filename})
get_filename_component(_filename "/home/krish/catkin_ws/src/kinova-movo/movo_common/movo_msgs/msg/MotionTestCmd.msg" NAME_WE)
add_dependencies(movo_msgs_generate_messages_eus _movo_msgs_generate_messages_check_deps_${_filename})
get_filename_component(_filename "/home/krish/catkin_ws/src/kinova-movo/movo_common/movo_msgs/msg/KinovaActuatorFdbk.msg" NAME_WE)
add_dependencies(movo_msgs_generate_messages_eus _movo_msgs_generate_messages_check_deps_${_filename})
get_filename_component(_filename "/home/krish/catkin_ws/src/kinova-movo/movo_common/movo_msgs/msg/PanTiltActuatorFdbk.msg" NAME_WE)
add_dependencies(movo_msgs_generate_messages_eus _movo_msgs_generate_messages_check_deps_${_filename})
get_filename_component(_filename "/home/krish/catkin_ws/src/kinova-movo/movo_common/movo_msgs/msg/PVA.msg" NAME_WE)
add_dependencies(movo_msgs_generate_messages_eus _movo_msgs_generate_messages_check_deps_${_filename})
get_filename_component(_filename "/home/krish/catkin_ws/src/kinova-movo/movo_common/movo_msgs/msg/PanTiltCmd.msg" NAME_WE)
add_dependencies(movo_msgs_generate_messages_eus _movo_msgs_generate_messages_check_deps_${_filename})
get_filename_component(_filename "/home/krish/catkin_ws/src/kinova-movo/movo_common/movo_msgs/msg/PanTiltFdbk.msg" NAME_WE)
add_dependencies(movo_msgs_generate_messages_eus _movo_msgs_generate_messages_check_deps_${_filename})

# target for backward compatibility
add_custom_target(movo_msgs_geneus)
add_dependencies(movo_msgs_geneus movo_msgs_generate_messages_eus)

# register target for catkin_package(EXPORTED_TARGETS)
list(APPEND ${PROJECT_NAME}_EXPORTED_TARGETS movo_msgs_generate_messages_eus)

### Section generating for lang: genlisp
### Generating Messages
_generate_msg_lisp(movo_msgs
  "/home/krish/catkin_ws/src/kinova-movo/movo_common/movo_msgs/msg/ConfigCmd.msg"
  "${MSG_I_FLAGS}"
  "/opt/ros/noetic/share/std_msgs/cmake/../msg/Header.msg"
  ${CATKIN_DEVEL_PREFIX}/${genlisp_INSTALL_DIR}/movo_msgs
)
_generate_msg_lisp(movo_msgs
  "/home/krish/catkin_ws/src/kinova-movo/movo_common/movo_msgs/msg/Battery.msg"
  "${MSG_I_FLAGS}"
  "/opt/ros/noetic/share/std_msgs/cmake/../msg/Header.msg"
  ${CATKIN_DEVEL_PREFIX}/${genlisp_INSTALL_DIR}/movo_msgs
)
_generate_msg_lisp(movo_msgs
  "/home/krish/catkin_ws/src/kinova-movo/movo_common/movo_msgs/msg/Status.msg"
  "${MSG_I_FLAGS}"
  "/opt/ros/noetic/share/std_msgs/cmake/../msg/Header.msg"
  ${CATKIN_DEVEL_PREFIX}/${genlisp_INSTALL_DIR}/movo_msgs
)
_generate_msg_lisp(movo_msgs
  "/home/krish/catkin_ws/src/kinova-movo/movo_common/movo_msgs/msg/Propulsion.msg"
  "${MSG_I_FLAGS}"
  "/opt/ros/noetic/share/std_msgs/cmake/../msg/Header.msg"
  ${CATKIN_DEVEL_PREFIX}/${genlisp_INSTALL_DIR}/movo_msgs
)
_generate_msg_lisp(movo_msgs
  "/home/krish/catkin_ws/src/kinova-movo/movo_common/movo_msgs/msg/Dynamics.msg"
  "${MSG_I_FLAGS}"
  "/opt/ros/noetic/share/std_msgs/cmake/../msg/Header.msg"
  ${CATKIN_DEVEL_PREFIX}/${genlisp_INSTALL_DIR}/movo_msgs
)
_generate_msg_lisp(movo_msgs
  "/home/krish/catkin_ws/src/kinova-movo/movo_common/movo_msgs/msg/Configuration.msg"
  "${MSG_I_FLAGS}"
  "/opt/ros/noetic/share/std_msgs/cmake/../msg/Header.msg"
  ${CATKIN_DEVEL_PREFIX}/${genlisp_INSTALL_DIR}/movo_msgs
)
_generate_msg_lisp(movo_msgs
  "/home/krish/catkin_ws/src/kinova-movo/movo_common/movo_msgs/msg/CtlParams.msg"
  "${MSG_I_FLAGS}"
  "/opt/ros/noetic/share/std_msgs/cmake/../msg/Header.msg"
  ${CATKIN_DEVEL_PREFIX}/${genlisp_INSTALL_DIR}/movo_msgs
)
_generate_msg_lisp(movo_msgs
  "/home/krish/catkin_ws/src/kinova-movo/movo_common/movo_msgs/msg/Faultlog.msg"
  "${MSG_I_FLAGS}"
  ""
  ${CATKIN_DEVEL_PREFIX}/${genlisp_INSTALL_DIR}/movo_msgs
)
_generate_msg_lisp(movo_msgs
  "/home/krish/catkin_ws/src/kinova-movo/movo_common/movo_msgs/msg/JacoJointCmd.msg"
  "${MSG_I_FLAGS}"
  "/opt/ros/noetic/share/std_msgs/cmake/../msg/Header.msg"
  ${CATKIN_DEVEL_PREFIX}/${genlisp_INSTALL_DIR}/movo_msgs
)
_generate_msg_lisp(movo_msgs
  "/home/krish/catkin_ws/src/kinova-movo/movo_common/movo_msgs/msg/JacoStatus.msg"
  "${MSG_I_FLAGS}"
  "/opt/ros/noetic/share/std_msgs/cmake/../msg/Header.msg"
  ${CATKIN_DEVEL_PREFIX}/${genlisp_INSTALL_DIR}/movo_msgs
)
_generate_msg_lisp(movo_msgs
  "/home/krish/catkin_ws/src/kinova-movo/movo_common/movo_msgs/msg/GripperCmd.msg"
  "${MSG_I_FLAGS}"
  ""
  ${CATKIN_DEVEL_PREFIX}/${genlisp_INSTALL_DIR}/movo_msgs
)
_generate_msg_lisp(movo_msgs
  "/home/krish/catkin_ws/src/kinova-movo/movo_common/movo_msgs/msg/GripperStat.msg"
  "${MSG_I_FLAGS}"
  "/opt/ros/noetic/share/std_msgs/cmake/../msg/Header.msg"
  ${CATKIN_DEVEL_PREFIX}/${genlisp_INSTALL_DIR}/movo_msgs
)
_generate_msg_lisp(movo_msgs
  "/home/krish/catkin_ws/src/kinova-movo/movo_common/movo_msgs/msg/LinearActuatorCmd.msg"
  "${MSG_I_FLAGS}"
  "/opt/ros/noetic/share/std_msgs/cmake/../msg/Header.msg"
  ${CATKIN_DEVEL_PREFIX}/${genlisp_INSTALL_DIR}/movo_msgs
)
_generate_msg_lisp(movo_msgs
  "/home/krish/catkin_ws/src/kinova-movo/movo_common/movo_msgs/msg/JacoCartesianVelocityCmd.msg"
  "${MSG_I_FLAGS}"
  "/opt/ros/noetic/share/std_msgs/cmake/../msg/Header.msg"
  ${CATKIN_DEVEL_PREFIX}/${genlisp_INSTALL_DIR}/movo_msgs
)
_generate_msg_lisp(movo_msgs
  "/home/krish/catkin_ws/src/kinova-movo/movo_common/movo_msgs/msg/MotionTestCmd.msg"
  "${MSG_I_FLAGS}"
  ""
  ${CATKIN_DEVEL_PREFIX}/${genlisp_INSTALL_DIR}/movo_msgs
)
_generate_msg_lisp(movo_msgs
  "/home/krish/catkin_ws/src/kinova-movo/movo_common/movo_msgs/msg/KinovaActuatorFdbk.msg"
  "${MSG_I_FLAGS}"
  "/opt/ros/noetic/share/std_msgs/cmake/../msg/Header.msg"
  ${CATKIN_DEVEL_PREFIX}/${genlisp_INSTALL_DIR}/movo_msgs
)
_generate_msg_lisp(movo_msgs
  "/home/krish/catkin_ws/src/kinova-movo/movo_common/movo_msgs/msg/PanTiltActuatorFdbk.msg"
  "${MSG_I_FLAGS}"
  "/opt/ros/noetic/share/std_msgs/cmake/../msg/Header.msg;/opt/ros/noetic/share/geometry_msgs/cmake/../msg/Vector3.msg"
  ${CATKIN_DEVEL_PREFIX}/${genlisp_INSTALL_DIR}/movo_msgs
)
_generate_msg_lisp(movo_msgs
  "/home/krish/catkin_ws/src/kinova-movo/movo_common/movo_msgs/msg/PVA.msg"
  "${MSG_I_FLAGS}"
  ""
  ${CATKIN_DEVEL_PREFIX}/${genlisp_INSTALL_DIR}/movo_msgs
)
_generate_msg_lisp(movo_msgs
  "/home/krish/catkin_ws/src/kinova-movo/movo_common/movo_msgs/msg/PanTiltCmd.msg"
  "${MSG_I_FLAGS}"
  "/opt/ros/noetic/share/std_msgs/cmake/../msg/Header.msg;/home/krish/catkin_ws/src/kinova-movo/movo_common/movo_msgs/msg/PVA.msg"
  ${CATKIN_DEVEL_PREFIX}/${genlisp_INSTALL_DIR}/movo_msgs
)
_generate_msg_lisp(movo_msgs
  "/home/krish/catkin_ws/src/kinova-movo/movo_common/movo_msgs/msg/PanTiltFdbk.msg"
  "${MSG_I_FLAGS}"
  "/opt/ros/noetic/share/std_msgs/cmake/../msg/Header.msg;/home/krish/catkin_ws/src/kinova-movo/movo_common/movo_msgs/msg/PanTiltActuatorFdbk.msg;/opt/ros/noetic/share/geometry_msgs/cmake/../msg/Vector3.msg"
  ${CATKIN_DEVEL_PREFIX}/${genlisp_INSTALL_DIR}/movo_msgs
)

### Generating Services

### Generating Module File
_generate_module_lisp(movo_msgs
  ${CATKIN_DEVEL_PREFIX}/${genlisp_INSTALL_DIR}/movo_msgs
  "${ALL_GEN_OUTPUT_FILES_lisp}"
)

add_custom_target(movo_msgs_generate_messages_lisp
  DEPENDS ${ALL_GEN_OUTPUT_FILES_lisp}
)
add_dependencies(movo_msgs_generate_messages movo_msgs_generate_messages_lisp)

# add dependencies to all check dependencies targets
get_filename_component(_filename "/home/krish/catkin_ws/src/kinova-movo/movo_common/movo_msgs/msg/ConfigCmd.msg" NAME_WE)
add_dependencies(movo_msgs_generate_messages_lisp _movo_msgs_generate_messages_check_deps_${_filename})
get_filename_component(_filename "/home/krish/catkin_ws/src/kinova-movo/movo_common/movo_msgs/msg/Battery.msg" NAME_WE)
add_dependencies(movo_msgs_generate_messages_lisp _movo_msgs_generate_messages_check_deps_${_filename})
get_filename_component(_filename "/home/krish/catkin_ws/src/kinova-movo/movo_common/movo_msgs/msg/Status.msg" NAME_WE)
add_dependencies(movo_msgs_generate_messages_lisp _movo_msgs_generate_messages_check_deps_${_filename})
get_filename_component(_filename "/home/krish/catkin_ws/src/kinova-movo/movo_common/movo_msgs/msg/Propulsion.msg" NAME_WE)
add_dependencies(movo_msgs_generate_messages_lisp _movo_msgs_generate_messages_check_deps_${_filename})
get_filename_component(_filename "/home/krish/catkin_ws/src/kinova-movo/movo_common/movo_msgs/msg/Dynamics.msg" NAME_WE)
add_dependencies(movo_msgs_generate_messages_lisp _movo_msgs_generate_messages_check_deps_${_filename})
get_filename_component(_filename "/home/krish/catkin_ws/src/kinova-movo/movo_common/movo_msgs/msg/Configuration.msg" NAME_WE)
add_dependencies(movo_msgs_generate_messages_lisp _movo_msgs_generate_messages_check_deps_${_filename})
get_filename_component(_filename "/home/krish/catkin_ws/src/kinova-movo/movo_common/movo_msgs/msg/CtlParams.msg" NAME_WE)
add_dependencies(movo_msgs_generate_messages_lisp _movo_msgs_generate_messages_check_deps_${_filename})
get_filename_component(_filename "/home/krish/catkin_ws/src/kinova-movo/movo_common/movo_msgs/msg/Faultlog.msg" NAME_WE)
add_dependencies(movo_msgs_generate_messages_lisp _movo_msgs_generate_messages_check_deps_${_filename})
get_filename_component(_filename "/home/krish/catkin_ws/src/kinova-movo/movo_common/movo_msgs/msg/JacoJointCmd.msg" NAME_WE)
add_dependencies(movo_msgs_generate_messages_lisp _movo_msgs_generate_messages_check_deps_${_filename})
get_filename_component(_filename "/home/krish/catkin_ws/src/kinova-movo/movo_common/movo_msgs/msg/JacoStatus.msg" NAME_WE)
add_dependencies(movo_msgs_generate_messages_lisp _movo_msgs_generate_messages_check_deps_${_filename})
get_filename_component(_filename "/home/krish/catkin_ws/src/kinova-movo/movo_common/movo_msgs/msg/GripperCmd.msg" NAME_WE)
add_dependencies(movo_msgs_generate_messages_lisp _movo_msgs_generate_messages_check_deps_${_filename})
get_filename_component(_filename "/home/krish/catkin_ws/src/kinova-movo/movo_common/movo_msgs/msg/GripperStat.msg" NAME_WE)
add_dependencies(movo_msgs_generate_messages_lisp _movo_msgs_generate_messages_check_deps_${_filename})
get_filename_component(_filename "/home/krish/catkin_ws/src/kinova-movo/movo_common/movo_msgs/msg/LinearActuatorCmd.msg" NAME_WE)
add_dependencies(movo_msgs_generate_messages_lisp _movo_msgs_generate_messages_check_deps_${_filename})
get_filename_component(_filename "/home/krish/catkin_ws/src/kinova-movo/movo_common/movo_msgs/msg/JacoCartesianVelocityCmd.msg" NAME_WE)
add_dependencies(movo_msgs_generate_messages_lisp _movo_msgs_generate_messages_check_deps_${_filename})
get_filename_component(_filename "/home/krish/catkin_ws/src/kinova-movo/movo_common/movo_msgs/msg/MotionTestCmd.msg" NAME_WE)
add_dependencies(movo_msgs_generate_messages_lisp _movo_msgs_generate_messages_check_deps_${_filename})
get_filename_component(_filename "/home/krish/catkin_ws/src/kinova-movo/movo_common/movo_msgs/msg/KinovaActuatorFdbk.msg" NAME_WE)
add_dependencies(movo_msgs_generate_messages_lisp _movo_msgs_generate_messages_check_deps_${_filename})
get_filename_component(_filename "/home/krish/catkin_ws/src/kinova-movo/movo_common/movo_msgs/msg/PanTiltActuatorFdbk.msg" NAME_WE)
add_dependencies(movo_msgs_generate_messages_lisp _movo_msgs_generate_messages_check_deps_${_filename})
get_filename_component(_filename "/home/krish/catkin_ws/src/kinova-movo/movo_common/movo_msgs/msg/PVA.msg" NAME_WE)
add_dependencies(movo_msgs_generate_messages_lisp _movo_msgs_generate_messages_check_deps_${_filename})
get_filename_component(_filename "/home/krish/catkin_ws/src/kinova-movo/movo_common/movo_msgs/msg/PanTiltCmd.msg" NAME_WE)
add_dependencies(movo_msgs_generate_messages_lisp _movo_msgs_generate_messages_check_deps_${_filename})
get_filename_component(_filename "/home/krish/catkin_ws/src/kinova-movo/movo_common/movo_msgs/msg/PanTiltFdbk.msg" NAME_WE)
add_dependencies(movo_msgs_generate_messages_lisp _movo_msgs_generate_messages_check_deps_${_filename})

# target for backward compatibility
add_custom_target(movo_msgs_genlisp)
add_dependencies(movo_msgs_genlisp movo_msgs_generate_messages_lisp)

# register target for catkin_package(EXPORTED_TARGETS)
list(APPEND ${PROJECT_NAME}_EXPORTED_TARGETS movo_msgs_generate_messages_lisp)

### Section generating for lang: gennodejs
### Generating Messages
_generate_msg_nodejs(movo_msgs
  "/home/krish/catkin_ws/src/kinova-movo/movo_common/movo_msgs/msg/ConfigCmd.msg"
  "${MSG_I_FLAGS}"
  "/opt/ros/noetic/share/std_msgs/cmake/../msg/Header.msg"
  ${CATKIN_DEVEL_PREFIX}/${gennodejs_INSTALL_DIR}/movo_msgs
)
_generate_msg_nodejs(movo_msgs
  "/home/krish/catkin_ws/src/kinova-movo/movo_common/movo_msgs/msg/Battery.msg"
  "${MSG_I_FLAGS}"
  "/opt/ros/noetic/share/std_msgs/cmake/../msg/Header.msg"
  ${CATKIN_DEVEL_PREFIX}/${gennodejs_INSTALL_DIR}/movo_msgs
)
_generate_msg_nodejs(movo_msgs
  "/home/krish/catkin_ws/src/kinova-movo/movo_common/movo_msgs/msg/Status.msg"
  "${MSG_I_FLAGS}"
  "/opt/ros/noetic/share/std_msgs/cmake/../msg/Header.msg"
  ${CATKIN_DEVEL_PREFIX}/${gennodejs_INSTALL_DIR}/movo_msgs
)
_generate_msg_nodejs(movo_msgs
  "/home/krish/catkin_ws/src/kinova-movo/movo_common/movo_msgs/msg/Propulsion.msg"
  "${MSG_I_FLAGS}"
  "/opt/ros/noetic/share/std_msgs/cmake/../msg/Header.msg"
  ${CATKIN_DEVEL_PREFIX}/${gennodejs_INSTALL_DIR}/movo_msgs
)
_generate_msg_nodejs(movo_msgs
  "/home/krish/catkin_ws/src/kinova-movo/movo_common/movo_msgs/msg/Dynamics.msg"
  "${MSG_I_FLAGS}"
  "/opt/ros/noetic/share/std_msgs/cmake/../msg/Header.msg"
  ${CATKIN_DEVEL_PREFIX}/${gennodejs_INSTALL_DIR}/movo_msgs
)
_generate_msg_nodejs(movo_msgs
  "/home/krish/catkin_ws/src/kinova-movo/movo_common/movo_msgs/msg/Configuration.msg"
  "${MSG_I_FLAGS}"
  "/opt/ros/noetic/share/std_msgs/cmake/../msg/Header.msg"
  ${CATKIN_DEVEL_PREFIX}/${gennodejs_INSTALL_DIR}/movo_msgs
)
_generate_msg_nodejs(movo_msgs
  "/home/krish/catkin_ws/src/kinova-movo/movo_common/movo_msgs/msg/CtlParams.msg"
  "${MSG_I_FLAGS}"
  "/opt/ros/noetic/share/std_msgs/cmake/../msg/Header.msg"
  ${CATKIN_DEVEL_PREFIX}/${gennodejs_INSTALL_DIR}/movo_msgs
)
_generate_msg_nodejs(movo_msgs
  "/home/krish/catkin_ws/src/kinova-movo/movo_common/movo_msgs/msg/Faultlog.msg"
  "${MSG_I_FLAGS}"
  ""
  ${CATKIN_DEVEL_PREFIX}/${gennodejs_INSTALL_DIR}/movo_msgs
)
_generate_msg_nodejs(movo_msgs
  "/home/krish/catkin_ws/src/kinova-movo/movo_common/movo_msgs/msg/JacoJointCmd.msg"
  "${MSG_I_FLAGS}"
  "/opt/ros/noetic/share/std_msgs/cmake/../msg/Header.msg"
  ${CATKIN_DEVEL_PREFIX}/${gennodejs_INSTALL_DIR}/movo_msgs
)
_generate_msg_nodejs(movo_msgs
  "/home/krish/catkin_ws/src/kinova-movo/movo_common/movo_msgs/msg/JacoStatus.msg"
  "${MSG_I_FLAGS}"
  "/opt/ros/noetic/share/std_msgs/cmake/../msg/Header.msg"
  ${CATKIN_DEVEL_PREFIX}/${gennodejs_INSTALL_DIR}/movo_msgs
)
_generate_msg_nodejs(movo_msgs
  "/home/krish/catkin_ws/src/kinova-movo/movo_common/movo_msgs/msg/GripperCmd.msg"
  "${MSG_I_FLAGS}"
  ""
  ${CATKIN_DEVEL_PREFIX}/${gennodejs_INSTALL_DIR}/movo_msgs
)
_generate_msg_nodejs(movo_msgs
  "/home/krish/catkin_ws/src/kinova-movo/movo_common/movo_msgs/msg/GripperStat.msg"
  "${MSG_I_FLAGS}"
  "/opt/ros/noetic/share/std_msgs/cmake/../msg/Header.msg"
  ${CATKIN_DEVEL_PREFIX}/${gennodejs_INSTALL_DIR}/movo_msgs
)
_generate_msg_nodejs(movo_msgs
  "/home/krish/catkin_ws/src/kinova-movo/movo_common/movo_msgs/msg/LinearActuatorCmd.msg"
  "${MSG_I_FLAGS}"
  "/opt/ros/noetic/share/std_msgs/cmake/../msg/Header.msg"
  ${CATKIN_DEVEL_PREFIX}/${gennodejs_INSTALL_DIR}/movo_msgs
)
_generate_msg_nodejs(movo_msgs
  "/home/krish/catkin_ws/src/kinova-movo/movo_common/movo_msgs/msg/JacoCartesianVelocityCmd.msg"
  "${MSG_I_FLAGS}"
  "/opt/ros/noetic/share/std_msgs/cmake/../msg/Header.msg"
  ${CATKIN_DEVEL_PREFIX}/${gennodejs_INSTALL_DIR}/movo_msgs
)
_generate_msg_nodejs(movo_msgs
  "/home/krish/catkin_ws/src/kinova-movo/movo_common/movo_msgs/msg/MotionTestCmd.msg"
  "${MSG_I_FLAGS}"
  ""
  ${CATKIN_DEVEL_PREFIX}/${gennodejs_INSTALL_DIR}/movo_msgs
)
_generate_msg_nodejs(movo_msgs
  "/home/krish/catkin_ws/src/kinova-movo/movo_common/movo_msgs/msg/KinovaActuatorFdbk.msg"
  "${MSG_I_FLAGS}"
  "/opt/ros/noetic/share/std_msgs/cmake/../msg/Header.msg"
  ${CATKIN_DEVEL_PREFIX}/${gennodejs_INSTALL_DIR}/movo_msgs
)
_generate_msg_nodejs(movo_msgs
  "/home/krish/catkin_ws/src/kinova-movo/movo_common/movo_msgs/msg/PanTiltActuatorFdbk.msg"
  "${MSG_I_FLAGS}"
  "/opt/ros/noetic/share/std_msgs/cmake/../msg/Header.msg;/opt/ros/noetic/share/geometry_msgs/cmake/../msg/Vector3.msg"
  ${CATKIN_DEVEL_PREFIX}/${gennodejs_INSTALL_DIR}/movo_msgs
)
_generate_msg_nodejs(movo_msgs
  "/home/krish/catkin_ws/src/kinova-movo/movo_common/movo_msgs/msg/PVA.msg"
  "${MSG_I_FLAGS}"
  ""
  ${CATKIN_DEVEL_PREFIX}/${gennodejs_INSTALL_DIR}/movo_msgs
)
_generate_msg_nodejs(movo_msgs
  "/home/krish/catkin_ws/src/kinova-movo/movo_common/movo_msgs/msg/PanTiltCmd.msg"
  "${MSG_I_FLAGS}"
  "/opt/ros/noetic/share/std_msgs/cmake/../msg/Header.msg;/home/krish/catkin_ws/src/kinova-movo/movo_common/movo_msgs/msg/PVA.msg"
  ${CATKIN_DEVEL_PREFIX}/${gennodejs_INSTALL_DIR}/movo_msgs
)
_generate_msg_nodejs(movo_msgs
  "/home/krish/catkin_ws/src/kinova-movo/movo_common/movo_msgs/msg/PanTiltFdbk.msg"
  "${MSG_I_FLAGS}"
  "/opt/ros/noetic/share/std_msgs/cmake/../msg/Header.msg;/home/krish/catkin_ws/src/kinova-movo/movo_common/movo_msgs/msg/PanTiltActuatorFdbk.msg;/opt/ros/noetic/share/geometry_msgs/cmake/../msg/Vector3.msg"
  ${CATKIN_DEVEL_PREFIX}/${gennodejs_INSTALL_DIR}/movo_msgs
)

### Generating Services

### Generating Module File
_generate_module_nodejs(movo_msgs
  ${CATKIN_DEVEL_PREFIX}/${gennodejs_INSTALL_DIR}/movo_msgs
  "${ALL_GEN_OUTPUT_FILES_nodejs}"
)

add_custom_target(movo_msgs_generate_messages_nodejs
  DEPENDS ${ALL_GEN_OUTPUT_FILES_nodejs}
)
add_dependencies(movo_msgs_generate_messages movo_msgs_generate_messages_nodejs)

# add dependencies to all check dependencies targets
get_filename_component(_filename "/home/krish/catkin_ws/src/kinova-movo/movo_common/movo_msgs/msg/ConfigCmd.msg" NAME_WE)
add_dependencies(movo_msgs_generate_messages_nodejs _movo_msgs_generate_messages_check_deps_${_filename})
get_filename_component(_filename "/home/krish/catkin_ws/src/kinova-movo/movo_common/movo_msgs/msg/Battery.msg" NAME_WE)
add_dependencies(movo_msgs_generate_messages_nodejs _movo_msgs_generate_messages_check_deps_${_filename})
get_filename_component(_filename "/home/krish/catkin_ws/src/kinova-movo/movo_common/movo_msgs/msg/Status.msg" NAME_WE)
add_dependencies(movo_msgs_generate_messages_nodejs _movo_msgs_generate_messages_check_deps_${_filename})
get_filename_component(_filename "/home/krish/catkin_ws/src/kinova-movo/movo_common/movo_msgs/msg/Propulsion.msg" NAME_WE)
add_dependencies(movo_msgs_generate_messages_nodejs _movo_msgs_generate_messages_check_deps_${_filename})
get_filename_component(_filename "/home/krish/catkin_ws/src/kinova-movo/movo_common/movo_msgs/msg/Dynamics.msg" NAME_WE)
add_dependencies(movo_msgs_generate_messages_nodejs _movo_msgs_generate_messages_check_deps_${_filename})
get_filename_component(_filename "/home/krish/catkin_ws/src/kinova-movo/movo_common/movo_msgs/msg/Configuration.msg" NAME_WE)
add_dependencies(movo_msgs_generate_messages_nodejs _movo_msgs_generate_messages_check_deps_${_filename})
get_filename_component(_filename "/home/krish/catkin_ws/src/kinova-movo/movo_common/movo_msgs/msg/CtlParams.msg" NAME_WE)
add_dependencies(movo_msgs_generate_messages_nodejs _movo_msgs_generate_messages_check_deps_${_filename})
get_filename_component(_filename "/home/krish/catkin_ws/src/kinova-movo/movo_common/movo_msgs/msg/Faultlog.msg" NAME_WE)
add_dependencies(movo_msgs_generate_messages_nodejs _movo_msgs_generate_messages_check_deps_${_filename})
get_filename_component(_filename "/home/krish/catkin_ws/src/kinova-movo/movo_common/movo_msgs/msg/JacoJointCmd.msg" NAME_WE)
add_dependencies(movo_msgs_generate_messages_nodejs _movo_msgs_generate_messages_check_deps_${_filename})
get_filename_component(_filename "/home/krish/catkin_ws/src/kinova-movo/movo_common/movo_msgs/msg/JacoStatus.msg" NAME_WE)
add_dependencies(movo_msgs_generate_messages_nodejs _movo_msgs_generate_messages_check_deps_${_filename})
get_filename_component(_filename "/home/krish/catkin_ws/src/kinova-movo/movo_common/movo_msgs/msg/GripperCmd.msg" NAME_WE)
add_dependencies(movo_msgs_generate_messages_nodejs _movo_msgs_generate_messages_check_deps_${_filename})
get_filename_component(_filename "/home/krish/catkin_ws/src/kinova-movo/movo_common/movo_msgs/msg/GripperStat.msg" NAME_WE)
add_dependencies(movo_msgs_generate_messages_nodejs _movo_msgs_generate_messages_check_deps_${_filename})
get_filename_component(_filename "/home/krish/catkin_ws/src/kinova-movo/movo_common/movo_msgs/msg/LinearActuatorCmd.msg" NAME_WE)
add_dependencies(movo_msgs_generate_messages_nodejs _movo_msgs_generate_messages_check_deps_${_filename})
get_filename_component(_filename "/home/krish/catkin_ws/src/kinova-movo/movo_common/movo_msgs/msg/JacoCartesianVelocityCmd.msg" NAME_WE)
add_dependencies(movo_msgs_generate_messages_nodejs _movo_msgs_generate_messages_check_deps_${_filename})
get_filename_component(_filename "/home/krish/catkin_ws/src/kinova-movo/movo_common/movo_msgs/msg/MotionTestCmd.msg" NAME_WE)
add_dependencies(movo_msgs_generate_messages_nodejs _movo_msgs_generate_messages_check_deps_${_filename})
get_filename_component(_filename "/home/krish/catkin_ws/src/kinova-movo/movo_common/movo_msgs/msg/KinovaActuatorFdbk.msg" NAME_WE)
add_dependencies(movo_msgs_generate_messages_nodejs _movo_msgs_generate_messages_check_deps_${_filename})
get_filename_component(_filename "/home/krish/catkin_ws/src/kinova-movo/movo_common/movo_msgs/msg/PanTiltActuatorFdbk.msg" NAME_WE)
add_dependencies(movo_msgs_generate_messages_nodejs _movo_msgs_generate_messages_check_deps_${_filename})
get_filename_component(_filename "/home/krish/catkin_ws/src/kinova-movo/movo_common/movo_msgs/msg/PVA.msg" NAME_WE)
add_dependencies(movo_msgs_generate_messages_nodejs _movo_msgs_generate_messages_check_deps_${_filename})
get_filename_component(_filename "/home/krish/catkin_ws/src/kinova-movo/movo_common/movo_msgs/msg/PanTiltCmd.msg" NAME_WE)
add_dependencies(movo_msgs_generate_messages_nodejs _movo_msgs_generate_messages_check_deps_${_filename})
get_filename_component(_filename "/home/krish/catkin_ws/src/kinova-movo/movo_common/movo_msgs/msg/PanTiltFdbk.msg" NAME_WE)
add_dependencies(movo_msgs_generate_messages_nodejs _movo_msgs_generate_messages_check_deps_${_filename})

# target for backward compatibility
add_custom_target(movo_msgs_gennodejs)
add_dependencies(movo_msgs_gennodejs movo_msgs_generate_messages_nodejs)

# register target for catkin_package(EXPORTED_TARGETS)
list(APPEND ${PROJECT_NAME}_EXPORTED_TARGETS movo_msgs_generate_messages_nodejs)

### Section generating for lang: genpy
### Generating Messages
_generate_msg_py(movo_msgs
  "/home/krish/catkin_ws/src/kinova-movo/movo_common/movo_msgs/msg/ConfigCmd.msg"
  "${MSG_I_FLAGS}"
  "/opt/ros/noetic/share/std_msgs/cmake/../msg/Header.msg"
  ${CATKIN_DEVEL_PREFIX}/${genpy_INSTALL_DIR}/movo_msgs
)
_generate_msg_py(movo_msgs
  "/home/krish/catkin_ws/src/kinova-movo/movo_common/movo_msgs/msg/Battery.msg"
  "${MSG_I_FLAGS}"
  "/opt/ros/noetic/share/std_msgs/cmake/../msg/Header.msg"
  ${CATKIN_DEVEL_PREFIX}/${genpy_INSTALL_DIR}/movo_msgs
)
_generate_msg_py(movo_msgs
  "/home/krish/catkin_ws/src/kinova-movo/movo_common/movo_msgs/msg/Status.msg"
  "${MSG_I_FLAGS}"
  "/opt/ros/noetic/share/std_msgs/cmake/../msg/Header.msg"
  ${CATKIN_DEVEL_PREFIX}/${genpy_INSTALL_DIR}/movo_msgs
)
_generate_msg_py(movo_msgs
  "/home/krish/catkin_ws/src/kinova-movo/movo_common/movo_msgs/msg/Propulsion.msg"
  "${MSG_I_FLAGS}"
  "/opt/ros/noetic/share/std_msgs/cmake/../msg/Header.msg"
  ${CATKIN_DEVEL_PREFIX}/${genpy_INSTALL_DIR}/movo_msgs
)
_generate_msg_py(movo_msgs
  "/home/krish/catkin_ws/src/kinova-movo/movo_common/movo_msgs/msg/Dynamics.msg"
  "${MSG_I_FLAGS}"
  "/opt/ros/noetic/share/std_msgs/cmake/../msg/Header.msg"
  ${CATKIN_DEVEL_PREFIX}/${genpy_INSTALL_DIR}/movo_msgs
)
_generate_msg_py(movo_msgs
  "/home/krish/catkin_ws/src/kinova-movo/movo_common/movo_msgs/msg/Configuration.msg"
  "${MSG_I_FLAGS}"
  "/opt/ros/noetic/share/std_msgs/cmake/../msg/Header.msg"
  ${CATKIN_DEVEL_PREFIX}/${genpy_INSTALL_DIR}/movo_msgs
)
_generate_msg_py(movo_msgs
  "/home/krish/catkin_ws/src/kinova-movo/movo_common/movo_msgs/msg/CtlParams.msg"
  "${MSG_I_FLAGS}"
  "/opt/ros/noetic/share/std_msgs/cmake/../msg/Header.msg"
  ${CATKIN_DEVEL_PREFIX}/${genpy_INSTALL_DIR}/movo_msgs
)
_generate_msg_py(movo_msgs
  "/home/krish/catkin_ws/src/kinova-movo/movo_common/movo_msgs/msg/Faultlog.msg"
  "${MSG_I_FLAGS}"
  ""
  ${CATKIN_DEVEL_PREFIX}/${genpy_INSTALL_DIR}/movo_msgs
)
_generate_msg_py(movo_msgs
  "/home/krish/catkin_ws/src/kinova-movo/movo_common/movo_msgs/msg/JacoJointCmd.msg"
  "${MSG_I_FLAGS}"
  "/opt/ros/noetic/share/std_msgs/cmake/../msg/Header.msg"
  ${CATKIN_DEVEL_PREFIX}/${genpy_INSTALL_DIR}/movo_msgs
)
_generate_msg_py(movo_msgs
  "/home/krish/catkin_ws/src/kinova-movo/movo_common/movo_msgs/msg/JacoStatus.msg"
  "${MSG_I_FLAGS}"
  "/opt/ros/noetic/share/std_msgs/cmake/../msg/Header.msg"
  ${CATKIN_DEVEL_PREFIX}/${genpy_INSTALL_DIR}/movo_msgs
)
_generate_msg_py(movo_msgs
  "/home/krish/catkin_ws/src/kinova-movo/movo_common/movo_msgs/msg/GripperCmd.msg"
  "${MSG_I_FLAGS}"
  ""
  ${CATKIN_DEVEL_PREFIX}/${genpy_INSTALL_DIR}/movo_msgs
)
_generate_msg_py(movo_msgs
  "/home/krish/catkin_ws/src/kinova-movo/movo_common/movo_msgs/msg/GripperStat.msg"
  "${MSG_I_FLAGS}"
  "/opt/ros/noetic/share/std_msgs/cmake/../msg/Header.msg"
  ${CATKIN_DEVEL_PREFIX}/${genpy_INSTALL_DIR}/movo_msgs
)
_generate_msg_py(movo_msgs
  "/home/krish/catkin_ws/src/kinova-movo/movo_common/movo_msgs/msg/LinearActuatorCmd.msg"
  "${MSG_I_FLAGS}"
  "/opt/ros/noetic/share/std_msgs/cmake/../msg/Header.msg"
  ${CATKIN_DEVEL_PREFIX}/${genpy_INSTALL_DIR}/movo_msgs
)
_generate_msg_py(movo_msgs
  "/home/krish/catkin_ws/src/kinova-movo/movo_common/movo_msgs/msg/JacoCartesianVelocityCmd.msg"
  "${MSG_I_FLAGS}"
  "/opt/ros/noetic/share/std_msgs/cmake/../msg/Header.msg"
  ${CATKIN_DEVEL_PREFIX}/${genpy_INSTALL_DIR}/movo_msgs
)
_generate_msg_py(movo_msgs
  "/home/krish/catkin_ws/src/kinova-movo/movo_common/movo_msgs/msg/MotionTestCmd.msg"
  "${MSG_I_FLAGS}"
  ""
  ${CATKIN_DEVEL_PREFIX}/${genpy_INSTALL_DIR}/movo_msgs
)
_generate_msg_py(movo_msgs
  "/home/krish/catkin_ws/src/kinova-movo/movo_common/movo_msgs/msg/KinovaActuatorFdbk.msg"
  "${MSG_I_FLAGS}"
  "/opt/ros/noetic/share/std_msgs/cmake/../msg/Header.msg"
  ${CATKIN_DEVEL_PREFIX}/${genpy_INSTALL_DIR}/movo_msgs
)
_generate_msg_py(movo_msgs
  "/home/krish/catkin_ws/src/kinova-movo/movo_common/movo_msgs/msg/PanTiltActuatorFdbk.msg"
  "${MSG_I_FLAGS}"
  "/opt/ros/noetic/share/std_msgs/cmake/../msg/Header.msg;/opt/ros/noetic/share/geometry_msgs/cmake/../msg/Vector3.msg"
  ${CATKIN_DEVEL_PREFIX}/${genpy_INSTALL_DIR}/movo_msgs
)
_generate_msg_py(movo_msgs
  "/home/krish/catkin_ws/src/kinova-movo/movo_common/movo_msgs/msg/PVA.msg"
  "${MSG_I_FLAGS}"
  ""
  ${CATKIN_DEVEL_PREFIX}/${genpy_INSTALL_DIR}/movo_msgs
)
_generate_msg_py(movo_msgs
  "/home/krish/catkin_ws/src/kinova-movo/movo_common/movo_msgs/msg/PanTiltCmd.msg"
  "${MSG_I_FLAGS}"
  "/opt/ros/noetic/share/std_msgs/cmake/../msg/Header.msg;/home/krish/catkin_ws/src/kinova-movo/movo_common/movo_msgs/msg/PVA.msg"
  ${CATKIN_DEVEL_PREFIX}/${genpy_INSTALL_DIR}/movo_msgs
)
_generate_msg_py(movo_msgs
  "/home/krish/catkin_ws/src/kinova-movo/movo_common/movo_msgs/msg/PanTiltFdbk.msg"
  "${MSG_I_FLAGS}"
  "/opt/ros/noetic/share/std_msgs/cmake/../msg/Header.msg;/home/krish/catkin_ws/src/kinova-movo/movo_common/movo_msgs/msg/PanTiltActuatorFdbk.msg;/opt/ros/noetic/share/geometry_msgs/cmake/../msg/Vector3.msg"
  ${CATKIN_DEVEL_PREFIX}/${genpy_INSTALL_DIR}/movo_msgs
)

### Generating Services

### Generating Module File
_generate_module_py(movo_msgs
  ${CATKIN_DEVEL_PREFIX}/${genpy_INSTALL_DIR}/movo_msgs
  "${ALL_GEN_OUTPUT_FILES_py}"
)

add_custom_target(movo_msgs_generate_messages_py
  DEPENDS ${ALL_GEN_OUTPUT_FILES_py}
)
add_dependencies(movo_msgs_generate_messages movo_msgs_generate_messages_py)

# add dependencies to all check dependencies targets
get_filename_component(_filename "/home/krish/catkin_ws/src/kinova-movo/movo_common/movo_msgs/msg/ConfigCmd.msg" NAME_WE)
add_dependencies(movo_msgs_generate_messages_py _movo_msgs_generate_messages_check_deps_${_filename})
get_filename_component(_filename "/home/krish/catkin_ws/src/kinova-movo/movo_common/movo_msgs/msg/Battery.msg" NAME_WE)
add_dependencies(movo_msgs_generate_messages_py _movo_msgs_generate_messages_check_deps_${_filename})
get_filename_component(_filename "/home/krish/catkin_ws/src/kinova-movo/movo_common/movo_msgs/msg/Status.msg" NAME_WE)
add_dependencies(movo_msgs_generate_messages_py _movo_msgs_generate_messages_check_deps_${_filename})
get_filename_component(_filename "/home/krish/catkin_ws/src/kinova-movo/movo_common/movo_msgs/msg/Propulsion.msg" NAME_WE)
add_dependencies(movo_msgs_generate_messages_py _movo_msgs_generate_messages_check_deps_${_filename})
get_filename_component(_filename "/home/krish/catkin_ws/src/kinova-movo/movo_common/movo_msgs/msg/Dynamics.msg" NAME_WE)
add_dependencies(movo_msgs_generate_messages_py _movo_msgs_generate_messages_check_deps_${_filename})
get_filename_component(_filename "/home/krish/catkin_ws/src/kinova-movo/movo_common/movo_msgs/msg/Configuration.msg" NAME_WE)
add_dependencies(movo_msgs_generate_messages_py _movo_msgs_generate_messages_check_deps_${_filename})
get_filename_component(_filename "/home/krish/catkin_ws/src/kinova-movo/movo_common/movo_msgs/msg/CtlParams.msg" NAME_WE)
add_dependencies(movo_msgs_generate_messages_py _movo_msgs_generate_messages_check_deps_${_filename})
get_filename_component(_filename "/home/krish/catkin_ws/src/kinova-movo/movo_common/movo_msgs/msg/Faultlog.msg" NAME_WE)
add_dependencies(movo_msgs_generate_messages_py _movo_msgs_generate_messages_check_deps_${_filename})
get_filename_component(_filename "/home/krish/catkin_ws/src/kinova-movo/movo_common/movo_msgs/msg/JacoJointCmd.msg" NAME_WE)
add_dependencies(movo_msgs_generate_messages_py _movo_msgs_generate_messages_check_deps_${_filename})
get_filename_component(_filename "/home/krish/catkin_ws/src/kinova-movo/movo_common/movo_msgs/msg/JacoStatus.msg" NAME_WE)
add_dependencies(movo_msgs_generate_messages_py _movo_msgs_generate_messages_check_deps_${_filename})
get_filename_component(_filename "/home/krish/catkin_ws/src/kinova-movo/movo_common/movo_msgs/msg/GripperCmd.msg" NAME_WE)
add_dependencies(movo_msgs_generate_messages_py _movo_msgs_generate_messages_check_deps_${_filename})
get_filename_component(_filename "/home/krish/catkin_ws/src/kinova-movo/movo_common/movo_msgs/msg/GripperStat.msg" NAME_WE)
add_dependencies(movo_msgs_generate_messages_py _movo_msgs_generate_messages_check_deps_${_filename})
get_filename_component(_filename "/home/krish/catkin_ws/src/kinova-movo/movo_common/movo_msgs/msg/LinearActuatorCmd.msg" NAME_WE)
add_dependencies(movo_msgs_generate_messages_py _movo_msgs_generate_messages_check_deps_${_filename})
get_filename_component(_filename "/home/krish/catkin_ws/src/kinova-movo/movo_common/movo_msgs/msg/JacoCartesianVelocityCmd.msg" NAME_WE)
add_dependencies(movo_msgs_generate_messages_py _movo_msgs_generate_messages_check_deps_${_filename})
get_filename_component(_filename "/home/krish/catkin_ws/src/kinova-movo/movo_common/movo_msgs/msg/MotionTestCmd.msg" NAME_WE)
add_dependencies(movo_msgs_generate_messages_py _movo_msgs_generate_messages_check_deps_${_filename})
get_filename_component(_filename "/home/krish/catkin_ws/src/kinova-movo/movo_common/movo_msgs/msg/KinovaActuatorFdbk.msg" NAME_WE)
add_dependencies(movo_msgs_generate_messages_py _movo_msgs_generate_messages_check_deps_${_filename})
get_filename_component(_filename "/home/krish/catkin_ws/src/kinova-movo/movo_common/movo_msgs/msg/PanTiltActuatorFdbk.msg" NAME_WE)
add_dependencies(movo_msgs_generate_messages_py _movo_msgs_generate_messages_check_deps_${_filename})
get_filename_component(_filename "/home/krish/catkin_ws/src/kinova-movo/movo_common/movo_msgs/msg/PVA.msg" NAME_WE)
add_dependencies(movo_msgs_generate_messages_py _movo_msgs_generate_messages_check_deps_${_filename})
get_filename_component(_filename "/home/krish/catkin_ws/src/kinova-movo/movo_common/movo_msgs/msg/PanTiltCmd.msg" NAME_WE)
add_dependencies(movo_msgs_generate_messages_py _movo_msgs_generate_messages_check_deps_${_filename})
get_filename_component(_filename "/home/krish/catkin_ws/src/kinova-movo/movo_common/movo_msgs/msg/PanTiltFdbk.msg" NAME_WE)
add_dependencies(movo_msgs_generate_messages_py _movo_msgs_generate_messages_check_deps_${_filename})

# target for backward compatibility
add_custom_target(movo_msgs_genpy)
add_dependencies(movo_msgs_genpy movo_msgs_generate_messages_py)

# register target for catkin_package(EXPORTED_TARGETS)
list(APPEND ${PROJECT_NAME}_EXPORTED_TARGETS movo_msgs_generate_messages_py)



if(gencpp_INSTALL_DIR AND EXISTS ${CATKIN_DEVEL_PREFIX}/${gencpp_INSTALL_DIR}/movo_msgs)
  # install generated code
  install(
    DIRECTORY ${CATKIN_DEVEL_PREFIX}/${gencpp_INSTALL_DIR}/movo_msgs
    DESTINATION ${gencpp_INSTALL_DIR}
  )
endif()
if(TARGET std_msgs_generate_messages_cpp)
  add_dependencies(movo_msgs_generate_messages_cpp std_msgs_generate_messages_cpp)
endif()
if(TARGET geometry_msgs_generate_messages_cpp)
  add_dependencies(movo_msgs_generate_messages_cpp geometry_msgs_generate_messages_cpp)
endif()

if(geneus_INSTALL_DIR AND EXISTS ${CATKIN_DEVEL_PREFIX}/${geneus_INSTALL_DIR}/movo_msgs)
  # install generated code
  install(
    DIRECTORY ${CATKIN_DEVEL_PREFIX}/${geneus_INSTALL_DIR}/movo_msgs
    DESTINATION ${geneus_INSTALL_DIR}
  )
endif()
if(TARGET std_msgs_generate_messages_eus)
  add_dependencies(movo_msgs_generate_messages_eus std_msgs_generate_messages_eus)
endif()
if(TARGET geometry_msgs_generate_messages_eus)
  add_dependencies(movo_msgs_generate_messages_eus geometry_msgs_generate_messages_eus)
endif()

if(genlisp_INSTALL_DIR AND EXISTS ${CATKIN_DEVEL_PREFIX}/${genlisp_INSTALL_DIR}/movo_msgs)
  # install generated code
  install(
    DIRECTORY ${CATKIN_DEVEL_PREFIX}/${genlisp_INSTALL_DIR}/movo_msgs
    DESTINATION ${genlisp_INSTALL_DIR}
  )
endif()
if(TARGET std_msgs_generate_messages_lisp)
  add_dependencies(movo_msgs_generate_messages_lisp std_msgs_generate_messages_lisp)
endif()
if(TARGET geometry_msgs_generate_messages_lisp)
  add_dependencies(movo_msgs_generate_messages_lisp geometry_msgs_generate_messages_lisp)
endif()

if(gennodejs_INSTALL_DIR AND EXISTS ${CATKIN_DEVEL_PREFIX}/${gennodejs_INSTALL_DIR}/movo_msgs)
  # install generated code
  install(
    DIRECTORY ${CATKIN_DEVEL_PREFIX}/${gennodejs_INSTALL_DIR}/movo_msgs
    DESTINATION ${gennodejs_INSTALL_DIR}
  )
endif()
if(TARGET std_msgs_generate_messages_nodejs)
  add_dependencies(movo_msgs_generate_messages_nodejs std_msgs_generate_messages_nodejs)
endif()
if(TARGET geometry_msgs_generate_messages_nodejs)
  add_dependencies(movo_msgs_generate_messages_nodejs geometry_msgs_generate_messages_nodejs)
endif()

if(genpy_INSTALL_DIR AND EXISTS ${CATKIN_DEVEL_PREFIX}/${genpy_INSTALL_DIR}/movo_msgs)
  install(CODE "execute_process(COMMAND \"/usr/bin/python3\" -m compileall \"${CATKIN_DEVEL_PREFIX}/${genpy_INSTALL_DIR}/movo_msgs\")")
  # install generated code
  install(
    DIRECTORY ${CATKIN_DEVEL_PREFIX}/${genpy_INSTALL_DIR}/movo_msgs
    DESTINATION ${genpy_INSTALL_DIR}
  )
endif()
if(TARGET std_msgs_generate_messages_py)
  add_dependencies(movo_msgs_generate_messages_py std_msgs_generate_messages_py)
endif()
if(TARGET geometry_msgs_generate_messages_py)
  add_dependencies(movo_msgs_generate_messages_py geometry_msgs_generate_messages_py)
endif()
