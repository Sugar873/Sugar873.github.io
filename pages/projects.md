---
layout: default
title: Projects
permalink: /projects/
---



## Autonomous Mapping and Navigation - Capstone Project
Team Members:
- Himanshu Singh (Software Engineer)
- Ray Prina (Computer Systems Engineer)
- Sangat Buttar (Computer Systems Engineer)
- Sagar Syal (Computer Systems Engineer)
- Sundar Vengadeswaran (Computer Systems Engineer)

### Project Overview
In our Engineering Capstone Project, we developed an Autonomous Mapping and Navigation system using the Hiwonder JetAuto robot. The project aimed to create techniques for efficient autonomous exploration and mapping, applicable to various high-risk and inaccessible environments.

### Motivation
Autonomous rovers are increasingly beneficial in dangerous or hard-to-reach areas, such as military zones, space, and deep-sea exploration. Our project focused on evaluating performance differences in autonomous mapping and navigation techniques from both hardware and software perspectives.

### System Design
- Hardware: The robot was equipped with LiDAR sensors, Hall Encoder Motors, and a ROS Control System.
- Software: Utilizing ROS1 (Robot Operating System), we integrated multiple SLAM algorithms for mapping and navigation.
- Simulation: Gazebo and RVIZ were used to simulate and visualize the environment and sensor data.

### Key Achievements
- Health and Safety: Managed several safety issues, including an electrical fire which led to the complete loss of the robotic system. This incident forced us to adapt quickly and transition the project to a simulation-based focus.
- Mapping Algorithms: Tested and compared various SLAM algorithms (Hector, Karto, Gmapping) for performance and accuracy.
- Exploration Algorithms: Implemented and evaluated different exploration algorithms, with RRT proving most effective.
- Simulation Performance: Used the EVO Python package for detailed performance analysis in a simulated ROS2 environment.

### Challenges Overcome
- Communication: Resolved issues with network configurations and IP address conflicts.
- Time Synchronization: Implemented an NTP server to address timing discrepancies across devices.
- Power Supply Issues: Identified and mitigated power delivery problems that caused hardware failures.

### Incident
During the testing phase, our robot suffered a catastrophic failure due to power supply issues, resulting in an electrical fire and the destruction of the system. Despite this significant setback, our team demonstrated resilience and adaptability by shifting our focus to a fully digital approach. We migrated our project to a ROS2-based simulation environment, ensuring the continuation and successful completion of our project objectives.
To hear more about the incident and view our incident report click [here](#).

### Simulation and Algorithm Results
Simulation Process: After the incident, we transitioned to a fully digital approach using Gazebo for simulation and RVIZ for visualization. This allowed us to test and validate various SLAM and exploration algorithms in a controlled environment. Remarkably, we completed this transition and conducted the simulations within three weeks of the project deadline.

#### Mapping Algorithms:
- Hector SLAM:
  - Performance: Struggled in complex environments with inconsistent map generation.
  - Strengths: Capable of real-time mapping without requiring high-quality odometry.
  - Weaknesses: Poor performance in environments lacking distinct features, resulting in less detailed maps.
- Karto SLAM:
  - Performance: Better accuracy and detail in map construction compared to Hector SLAM.
  - Strengths: Utilizes both LIDAR and odometry data, providing more reliable maps.
  - Weaknesses: Slightly more computationally intensive, requiring more processing power.
- Gmapping:
  - Performance: Best performance among the tested algorithms, providing highly detailed and reliable maps.
  - Strengths: Uses the Rao-Blackwellized Particle Filter, effectively integrating odometry and LIDAR data.
  - Weaknesses: Requires careful tuning of parameters for optimal performance.

#### Exploration Algorithms:
- Frontiers:
  - Performance: Effective in large, open spaces but struggled in environments with many obstacles.
  - Strengths: Systematically explores boundaries between known and unknown areas.
  - Weaknesses: Increased frontiers in complex environments led to more extensive exploration needs.
- ExploreLite:
  - Performance: Efficient in proximity-based exploration but less thorough in dynamic environments.
  - Strengths: Reduces redundant travel by prioritizing nearby unexplored areas.
  - Weaknesses: May overlook important distant regions, leading to incomplete exploration.
- RRT Exploration:
  - Performance: Best results in navigating complex environments with rapid tree expansion.
  - Strengths: Balances exploration of large areas and cluttered spaces efficiently.
  - Weaknesses: Requires more computational resources to manage rapid tree growth.

#### Performance Analysis:
Using the EVO Python package, we conducted a detailed performance analysis in a simulated ROS2 environment. This included:
- Trajectory Analysis: Evaluated the accuracy of the robot's estimated position compared to its actual position.
- Odometry Accuracy: Assessed how well the robot maintained its position estimates over time.
- Map Accuracy: Analyzed the quality and reliability of the generated maps.

#### Results:
- Gmapping: Produced the most accurate maps with the highest level of detail, effectively handling uncertainties in localization and map construction.
- RRT Exploration: Outperformed other algorithms by efficiently covering large areas and navigating through complex environments.
- Simulation Environment: Allowed for thorough testing and validation, ensuring the reliability of our algorithms and system design.

### Conclusion
Our project demonstrated the practical application of advanced engineering concepts in developing autonomous systems. Despite hardware setbacks, we successfully transitioned to a robust simulation environment within a tight timeframe, showcasing our adaptability, problem-solving skills, and commitment to continuous improvement.