# Fluid Emmiter

___

## About

Configuration parameters for fluid emmiter

___

## General

| Parameter Name | Parameter Description | Example Value | Possible Parameters |
|---|---|---|---|
| Type | Emitter type | SimpleGaussian | SimpleGaussian<br>SimpleDraught |
| Position | Local coordinates of the emitter center in volume space | 0.5, 0.5, 0.5 | X --- 0.0 - 1.0<br> Y --- 0.0 - 1.0<br> Z --- 0.0 - 1.0 |
| WorldPosition | `Position` alternative: global coordinates in world space | 10.0, 2.0, 15.0 | XYZ |
| Radius | Emitter influence radius | 0.4 | >0.0 |
| Sigma | Gaussian distribution width parameter | 0.2 | >0.0 |
| FlowDirection | Flow direction | 0, 1, 0 | X --- -1.0 - 1.0<br> Y --- -1.0 - 1.0<br> Z --- -1.0 - 1.0 |
| FlowSpeed | Flow speed | 1.5 | ≥0.0 |
| Density | Maximum fluid density at the center of the emitter | 1.0 | ≥0.0 |
| ApplyDensity | Does the emitter affect the density field | true | true/false |
| ApplyImpulse | Does the emitter affect the velocity field | true | true/false |

## Specific parameters for SimpleDraught

| Parameter Name | Parameter Description | Example Value | Possible Parameters |
|---|---|---|---|
| DraughtPeriod | Pulsation period | 1.5 | ≥0.0 |
| DraughtPhase | Initial pulsation phase | 0.0 | 0.0-2π |
| DraughtAmp | Pulsation amplitude | 0.7 | ≥0.0 |
