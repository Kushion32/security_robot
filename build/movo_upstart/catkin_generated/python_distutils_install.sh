#!/bin/sh

if [ -n "$DESTDIR" ] ; then
    case $DESTDIR in
        /*) # ok
            ;;
        *)
            /bin/echo "DESTDIR argument must be absolute... "
            /bin/echo "otherwise python's distutils will bork things."
            exit 1
    esac
fi

echo_and_run() { echo "+ $@" ; "$@" ; }

echo_and_run cd "/home/krish/catkin_ws/src/kinova-movo/movo_robot/movo_upstart"

# ensure that Python install destination exists
echo_and_run mkdir -p "$DESTDIR/home/krish/catkin_ws/install/lib/python3/dist-packages"

# Note that PYTHONPATH is pulled from the environment to support installing
# into one location when some dependencies were installed in another
# location, #123.
echo_and_run /usr/bin/env \
    PYTHONPATH="/home/krish/catkin_ws/install/lib/python3/dist-packages:/home/krish/catkin_ws/build/movo_upstart/lib/python3/dist-packages:$PYTHONPATH" \
    CATKIN_BINARY_DIR="/home/krish/catkin_ws/build/movo_upstart" \
    "/usr/bin/python3" \
    "/home/krish/catkin_ws/src/kinova-movo/movo_robot/movo_upstart/setup.py" \
     \
    build --build-base "/home/krish/catkin_ws/build/movo_upstart" \
    install \
    --root="${DESTDIR-/}" \
    --install-layout=deb --prefix="/home/krish/catkin_ws/install" --install-scripts="/home/krish/catkin_ws/install/bin"
