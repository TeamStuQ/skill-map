# Apollo 自动驾驶工程师技能图谱

本图谱核心贡献者：Apollo 技术布道师团队

> 基于 Apollo 技术框架的自动驾驶工程师技能图谱：跟公布的技术框架结构保持一致，强调了 Apollo 软件之外的硬件能力。

## Toolbox（Basic）
- Bazel
- Protobuf
- Docker
- ROS
- OpenCV

## Language（Basic）
- C++
- Bash 
- Python
    + Keras
- JavaScript
    + Node.js
    + React

## Machine Learning Frameworks（Basic）
- PaddlePaddle
- Caffe
- TensorFlow

## 硬件（芯片）编程 （Basic）
- CPU
- GPU(CUDA)
- FPGA

## Cloud Service Platform（Apollo）
- HD Map
    + OpenDrive
- Simulation
    + Matlab/Simulink
    + GameEngine(UE4)
- Data Platform
    - 虚拟化
    - 异构计算
    - 分布式计算
    - 分布式存储
- Security
- OTA
- DuerOS

## Open Modules（Apollo）
+ Localization
+ Perception
    - Deep Learning:CNN
    - Low-level Vision
    - 图形学与视觉几何
    - 状态估计与滤波
    - 最优化问题求解
+ Planning
    - Smoothing Curves
    - Vehicle Kinematics
    - Station-time 2D Model
    - Optimization Algorithms:Dynamic Programming
    - Quadratic Programming
    - Smoothing Spline
    - A*
    - Probability Math Models:Bayesian
    - Markov Process
    - MDP
    - Machine Learning:
        + CNN
        + RNN
        + Reinforcement Learning 
    - Motion Planning Background:Sampling Based Motion Planning
    - Optimization Based Motion Planning
    - ComputerScience:Parallel Programming
    - For Planning Focused:Basic Motion Planning Technique
    - Dynamic Programming
    - Computation Geometry
    - 深度学习算法、BP 算法
+ Control
    - Basic Control Theory
    - Linear-Quadratic Regulator (LQR)
    - Model Predictive Control(MPC)
    - PID Basic Control Theory 
+ End-to-End
    * Deep Learning
    * CV
    * 逆向汽车动力学模型
    * 端到端驾驶模型：
        - 横向模型：CNN
        - 纵向模型：Convolutional-LSTM
        - 横 + 纵向模型：LRCN

## Hardware & Sensors （Apollo）
- Computing Unit
    + IPC（Intel Nvidia ...)
    + 专用自动驾驶计算单元(PX2 TX2 ...)
- Perception
    + Camera(单目／双目)
    + LiDAR
    + Radar
    + Ultrasonic Radar
- Localization
    + GPS
    + IMU
    + other perception sensors
- CAN Card
- HMI Device
- V2X Device
- Safety
    + Black Box
- 传感器知识与技能
    + 搭建方式
    + 配置流程
    + 数据形式
    + 能够通过数据判断传感器是否正常工作
- 无人车知识与技能
    + 基本的硬件组成
    + 各 Sensors 流程
    + 通讯信息接口
    + 各个传感器优点、能力与局限
    + 知道本模块对于硬件的需求
    + 算法对于硬件的依赖、瓶颈
    + 硬件的基本参数性能、调参方法
    + 熟悉上车开发调试环境

## Vehicle（Apollo）
- 线控车辆
- 车辆电子控制系统
    + Protocol
      - Can
      - Lin
      - FlexRay
    + 动力系统控制
    + 制动系统控制
    + 转向系统控制
- 车载语音交互系统
- AUTOSAR
