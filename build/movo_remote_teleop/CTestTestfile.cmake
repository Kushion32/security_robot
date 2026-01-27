# CMake generated Testfile for 
# Source directory: /home/krish/catkin_ws/src/kinova-movo/movo_desktop/movo_remote_teleop
# Build directory: /home/krish/catkin_ws/build/movo_remote_teleop
# 
# This file includes the relevant testing commands required for 
# testing this directory and lists subdirectories to be tested as well.
add_test(_ctest_movo_remote_teleop_roslaunch-check_launch "/home/krish/catkin_ws/build/movo_remote_teleop/catkin_generated/env_cached.sh" "/usr/bin/python3" "/opt/ros/noetic/share/catkin/cmake/test/run_tests.py" "/home/krish/catkin_ws/build/movo_remote_teleop/test_results/movo_remote_teleop/roslaunch-check_launch.xml" "--return-code" "/usr/bin/cmake -E make_directory /home/krish/catkin_ws/build/movo_remote_teleop/test_results/movo_remote_teleop" "/opt/ros/noetic/share/roslaunch/cmake/../scripts/roslaunch-check -o \"/home/krish/catkin_ws/build/movo_remote_teleop/test_results/movo_remote_teleop/roslaunch-check_launch.xml\" \"/home/krish/catkin_ws/src/kinova-movo/movo_desktop/movo_remote_teleop/launch\" ")
set_tests_properties(_ctest_movo_remote_teleop_roslaunch-check_launch PROPERTIES  _BACKTRACE_TRIPLES "/opt/ros/noetic/share/catkin/cmake/test/tests.cmake;160;add_test;/opt/ros/noetic/share/roslaunch/cmake/roslaunch-extras.cmake;66;catkin_run_tests_target;/home/krish/catkin_ws/src/kinova-movo/movo_desktop/movo_remote_teleop/CMakeLists.txt;8;roslaunch_add_file_check;/home/krish/catkin_ws/src/kinova-movo/movo_desktop/movo_remote_teleop/CMakeLists.txt;0;")
subdirs("gtest")
