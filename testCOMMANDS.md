## Robot Setup

1. Turn on the robot with the button beside e-stop (movo1)
2. Take off black back cover, click button to turn on smaller pc (movo2) on middle right
3. ping movo1 and ping movo2 to make sure they are on and connected to wifi (autoconnected to robohub network)
4. Do setup detailed in README for displaying rostopics


## Passwords and Sign In's
Surface: Surface!

## 

run on the movo1
roslaunch movo_demos map_nav.launch sim:=false local:=true map_file:=movo_map


roslaunch movo_viz view_robot.launch function:=map_nav

roslaunch movo_demos robot_map_nav.launch map_file:=movo_map

rosrun map_server map_saver -f ~/movo_map

rosrun gmapping slam_gmapping scan:=/movo/scan_multi _base_frame:=base_link _odom_frame:=odom _map_update_interval:=1.0[ INFO] [1762810286.701162467]: Done initializing likelihood field model.

 rosrun joy joy_node


rosrun map_server map_server /home/robohub/catkin_ws/src/kinova-movo/movo_demos/maps/floor_plan.yaml _frame_id:=map _topic:=/floor_plan


rosrun movo_nav goto_points.py _waypoints_file:=/home/krish/catkin_ws/src/kinova-movo/movo_nav/movo_waypoints.yaml _target:=storage_closet


rostopic echo /clicked_point

python3 realsense_person_counter.py 
rostopic echo /people/count

ROS_NAMESPACE=/movo rosrun teleop_twist_keyboard teleop_twist_keyboard.py 



# Terminal 1: Start person following system
roslaunch movo_people person_following_navigation.launch

# Terminal 2: Run your navigation script

## With UI (waits for UI confirmation to return):
rosrun movo_nav goto_points.py _interactive:=false _ui_mode:=true

## Without UI (auto-returns after 5 seconds):
rosrun movo_nav goto_points.py _interactive:=false _ui_mode:=false

## Interactive terminal mode (auto-returns after 5 seconds):
rosrun movo_nav goto_points.py

## Custom auto-return delay (e.g., 10 seconds):
rosrun movo_nav goto_points.py _ui_mode:=false _auto_return_delay:=10.0

## UI Topics:
# Send navigation command: rostopic pub /ui_navigation_command std_msgs/String "data: 'kitchen'"
# Confirm arrival: rostopic pub /ui_arrival_confirmed std_msgs/Bool "data: true"

rosrun movo_nav goto_points.py _interactive:=false

 rostopic echo /movo/person_following_status

  roslaunch movo_people person_following_navigation.launch
rosrun movo_nav goto_points.py _interactive:=false _ui_mode:=true

rosrun image_view image_view image:=/face_auth/overlay/compressed
roslaunch movo_nav face_authentication.launch

# Start leg_detector + person monitor together:
roslaunch movo_people person_following_navigation.launch

# Verify leg detections are coming in (before starting navigation):
rostopic echo /leg_tracker_measurements

# Watch the following status:
rostopic echo /movo/person_following_status


rosrun movo_nav map_manager.py

rosrun movo_people screen_flip_node.py

rosservice call /movo/flip_to_front_screen

rosservice call /movo/flip_to_back_screen

# watch state
rostopic echo /movo/auto_screen_flip/state

# send home command from terminal (same thing UI would publish)
rostopic pub -1 /movo/auto_screen_flip/command std_msgs/String "data: 'home'"

roslaunch movo_people auto_screen_flip.launch trigger_distance_m:=0.40 clear_distance_m:=0.60

rosrun movo_people realsense_person_counter.py


















# Person Following Navigation - Quick Start Guide

## What Was Added

Your MOVO robot can now guide people to locations while ensuring they stay close (within 1-2 meters). If the person stops following, the robot stops and turns to face them.

## Files Created

1. **Main monitoring node**: [movo_people/scripts/person_following_monitor.py](src/kinova-movo/movo_people/scripts/person_following_monitor.py)
   - Monitors person presence using lidar and camera
   - Detects when person stops following
   - Makes robot stop and turn toward person

2. **Launch file**: [movo_people/launch/person_following_navigation.launch](src/kinova-movo/movo_people/launch/person_following_navigation.launch)
   - Easy way to start the system

3. **Documentation**: [movo_people/README_PERSON_FOLLOWING.md](src/kinova-movo/movo_people/README_PERSON_FOLLOWING.md)
   - Complete guide with parameters and troubleshooting

## Files Modified

1. **Navigation controller**: [movo_ros/src/movo/move_base.py](src/kinova-movo/movo_common/movo_ros/src/movo/move_base.py)
   - Added person following checks during navigation
   - Pauses navigation when person stops following
   - Resumes when person returns

## How to Use

### Start the system:
```bash
roslaunch movo_people person_following_navigation.launch
```

### Send navigation goals normally:
- Use RViz "2D Nav Goal" tool
- Or publish to `/move_base_simple/goal`

The robot will now automatically:
- Monitor if person is within 1-2 meters
- Stop if person stops following
- Turn to face the person
- Resume navigation when person returns

## Key Features

✓ Dual detection: Camera (YOLO) + Lidar (leg detection)  
✓ Distance monitoring: Keeps person within 0.5-2.5 meters  
✓ Automatic stop: Robot stops if person not detected for 3 seconds  
✓ Turn to face: Robot turns toward person's last location  
✓ Auto-resume: Navigation continues when person returns  
✓ Safety timeout: Aborts if person doesn't return in 30 seconds  

## Adjustable Parameters

- `min_follow_distance`: Minimum distance (default: 0.5m)
- `max_follow_distance`: Maximum distance (default: 2.5m)
- `person_lost_timeout`: Time before considering person lost (default: 3.0s)

## Example with Custom Settings:

```bash
roslaunch movo_people person_following_navigation.launch \
  min_follow_distance:=1.0 \
  max_follow_distance:=2.0
```

## To Disable Person Following:

```bash
roslaunch movo_people person_following_navigation.launch \
  enable_person_following:=false
```

For full documentation, see [README_PERSON_FOLLOWING.md](src/kinova-movo/movo_people/README_PERSON_FOLLOWING.md)
