# Apollo自动驾驶工程师技能图谱

基于Apollo技术框架的知识技能图谱：
- 跟公布的技术框架结构保持一致
- 强调了Apollo软件之外的硬件能力

# 基础知识
## Toolbox
- Bazel
- Protobuf
- Docker
- ROS
- OpenCV

## Language

- C++
- Bash 
- Python
- Javascript
    + Node.js
    + React

## Machine Learning Frameworks

- PaddlePaddle
- Caffe
- Tensorflow
- CUDA

## 硬件（芯片）编程 
- CPU
- GPU
- FPGA

# Apollo专属知识
## Cloud Service Platform
- HD Map
    + OpenDrive
- Simulation
    + Matlab/Simulink
    + GameEngine(UE4)
- Data Platform
- Security
- OTA
- DuerOS

## Open Modules
+ Map Engine
+ Localization
+ Perception
    - Machine Learning:CNN
    - 底层视觉
    - 图形学与视觉几何
    - 状态估计与滤波
    - 最优化问题求解
+ Planning
    - Smoothing Curves
    - Vehicle Kinematics
    - Station-time 2D model
    - Optimization Algorithms:Dynamic Programming
    - Quadratic Programming
    - Smoothing Spline
    - A*
    - Probability Math Models:Bayesian
    - Markov Process
    - MDP
    - Machine Learning:CNN,RNN,Reinforcement Learning 
    - Motion Planning Background:Sampling Based Motion Planning
    - Optimization Based Motion Planning
    - ComputerScience:Parallel Programming
    - Forplanningfocused:basic Motion Planning Technique
    - Dynamic Programming
    - Computation Geometry
    - 深度学习算法、BP算法
+ Control
    - Basic Control Thoery
    - Linear-Quadratic Regulator (LQR)
    - Model Predictive Control(MPC)
    - PID Basic Control Theory 
+ End-to-End
    * Deep learning
    * CV
    * 逆向汽车动力学模型
        - 横向模型：Convolutional Neural Network(CNN)
        - 纵向模型：Convolutional-LSTM
        - 横 + 纵向模型：LRCN

## Hardware & Sensors 
- Computing Unit
    + PX2
    + TX2
- Perception
    + Camera
    + LiDAR
    + Radar
    + Ultrasonic Radar
- Localization
    + GPS
    + IMU
    + other perception sensors
- CAN Card
- HMI Divice

传感器搭建方式、配置流程、数据形式，能够通过数据判断传感器是否正常工作;
无人车基本的硬件组成，各个sensor流程，通讯信息接口，各个传感器优点能够知道本模块对于硬件需求，算法对于硬件的依赖，瓶颈等；
硬件的性能，传感器的能力；传感器的局限等；

需要掌握硬件基本参数性能、调参方法

## Vehicle
- 车辆电子控制系统
    + Protocol 
      - Lin
      - Can
      - FlexRay
    + 动力系统控制
    + 制动系统控制
    + 转向系统控制
- 车载语音交互系统
- 汽车动力学
- AUTOSAR

熟悉上车开发调试环境，清楚软件linux下调试流程。