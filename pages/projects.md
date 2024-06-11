---
layout: default
title: Projects
permalink: /projects/
---

<details>
    <summary>
        <h3 style="display: inline-block">Autonomous Car Navigation and Mapping</h3>
    </summary>
    <h4>Key Components of the Project</h4>
    <h5>Motivation</h5>
    <p>Autonomous rovers have proven beneficial in various high-risk and remote environments, such as military operations, space exploration, and nuclear zones. This project aimed to develop techniques to analyze performance differences in autonomous mapping and navigation, considering both hardware and software perspectives.</p>
    <h5>Proposed Solution</h5>
    <figure style="display: flex; flex-direction: column; align-items: center;">
        <img src="/assets/images/robot.jpg" alt="Image of Highwonder JetAuto" width="650" height="500">
        <figcaption><strong>Highwonder JetAuto</strong></figcaption>
    </figure>    
    <ul>
        <li>Sensor Integration: Utilized Hiwonder JetAuto robot equipped with RPLIDAR A1 and other sensors for obstacle detection.</li>
        <li>SLAM Algorithm: Employed Robot Operating System (ROS1) to manage SLAM algorithm nodes for real-time mapping and localization.</li>
        <li>Path Planning: Developed dynamic path planning algorithms to navigate around obstacles and optimize routes.</li>
    </ul>
    <h5>System Design</h5>
    <ul>
        <li>Components: The system included LiDAR, RGB-D camera, Hall Encoder Geared Motors, ROS Control System, and an 11.1V 6000mAh Lithium Phosphate Battery.</li>
        <li>Integration: Sensors were mounted on the robot to scan the environment, generate maps, and navigate to specified points while avoiding obstacles. Multiple iterations of the hardware design were tested for optimal performance.</li>
    </ul>
    <h5>Experiments and Results</h5>
    <ul>
    <li>Incident Handling: An electrical fire incident led to a shift in focus to simulation-based testing, using Gazebo and RVIZ for visualization and performance analysis. For more information the incident report is listed at the bottom of this project</li>
        <figure style="display: flex; flex-direction: column; align-items: center;">
            <img src="/assets/images/robot_on_fire.jpg" alt="Image of Highwonder JetAuto" width="250" height="250">
            <figcaption>Hiwonder JetAuto Self Combusting</figcaption>
        </figure>
        <li>Test Scenarios: The system was tested in a simulated environment due to safety issues with the physical robot. Various exploration and mapping algorithms were evaluated.</li>
        <li>Validation: The JetAuto robot successfully generated maps and navigated through complex environments. Hector SLAM, Karto SLAM, and Gmapping were compared, with Gmapping demonstrating the best performance.</li>
        <div style="display: flex; justify-content: center;">
            <video width="630" height="490" controls>
             <source src="/assets/videos/DemoDrive1.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>
        </div>
    <div style="display: flex; justify-content: center;">
        <video width="630" height="490" controls>
            <source src="/assets/videos/DemoDrive2.mp4" type="video/mp4">
            Your browser does not support the video tag.
        </video>
    </div>
    </ul>
    <h5>Conclusion</h5>
    <p>The project successfully developed an autonomous mapping and navigation system using ROS and SLAM algorithms, despite challenges with hardware safety. Future improvements include refining obstacle detection and further optimizing path planning algorithms in a simulation environment.</p>
    <p><a href="/pages/pdfs/Autonomous_Car_Navigation">Autonomous Car Navigation and Mapping Project Report</a></p>
    <p><a href="/pages/pdfs/Incident_Report">Autonomous Car Navigation and Mapping Incident Report</a></p>
</details>

<details>
    <summary>
        <h3 style="display: inline-block">Dynamic Trajectory Generation for LPD Surgery</h3>
    </summary>
    <h4>Key Components of the Project</h4>
    <h5>Motivation</h5>
    <p>Laparoscopic Pancreaticoduodenectomy (LPD) offers a minimally invasive approach to pancreatic cancer surgery, reducing blood loss and complications. However, the deep location of the pancreas and the risk of organ and vascular injuries make LPD challenging. This project aimed to enhance patient safety and surgical outcomes through dynamic obstacle detection and trajectory generation.</p>
    <h5>Proposed Solution</h5>
    <figure style="display: flex; flex-direction: column; align-items: center;">
        <img src="/assets/images/surgical_arm.jpg" alt="Image of Meca500 with Camera" width="650" height="500">
        <figcaption><strong>Meca500</strong></figcaption>
    </figure>
    <ul>
        <li>Obstacle Detection: Utilized OpenCV to identify obstacles based on color differentiation.</li>
        <li>Depth Measurement: Employed an HC-SR04 ultrasonic sensor to obtain depth measurements.</li>
        <li>Trajectory Generation: Developed a simplified intersection-based algorithm to create efficient paths around obstacles.</li>
    </ul>
    <h5>System Design</h5>
    <ul>
        <li>Components: Meca500 robotic arm, web camera, HC-SR04 ultrasonic sensor, styrofoam obstacles.</li>
        <li>Integration: The camera and ultrasonic sensor were mounted on the robotic arm to detect and localize obstacles, transforming their positions to the World Reference Frame (WRF).</li>
    </ul>
    <h5>Experiments and Results</h5>
    <ul>
        <li>Test Scenarios: The system was tested with stationary and moving obstacles, demonstrating successful obstacle recognition and dynamic adjustment of the robot's path.</li>
        <li>Validation: The integrated system accurately avoided obstacles and navigated to the target, confirming the effectiveness of the obstacle detection and trajectory generation components.</li>
        <div style="display: flex; justify-content: center;">
            <video width="470" height="390" controls>
                <source src="/assets/videos/ArmTest1.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>
        </div>
    <div style="display: flex; justify-content: center;">
        <video width="470" height="390" controls>
            <source src="/assets/videos/ArmTest2.mp4" type="video/mp4">
            Your browser does not support the video tag.
        </video>
    </div>
    </ul>
    <h5>Conclusion</h5>
    <p>The project developed a functional system for enhancing robotic-assisted LPD surgery through dynamic obstacle detection and trajectory generation. Future improvements include implementing a more advanced trajectory algorithm and refining obstacle differentiation.</p>
</details>
