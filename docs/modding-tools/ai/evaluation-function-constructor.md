# Evaluation Function Constructor

___

## Info

|  |  |
|---|---|
| Program Developer | Dmitriy Iassenev (GSC Game World) |
| Described Version | 0.564 |

___

## About

Program for creating evaluation functions.

## Switches

| Key | Description |
|---|---|
| -p \<name> | Obligatory switch with project name |
| -pa | Perform operations for all projects |
| -c\[d] | Convert text to binary data and generate initial patterns.d - Show duplicates being found in text data |
| -g\{c,p\[s],b} | gc - Generate configurations from atomic features based on test data.gp - generate patterns from configurations being generated.gps - Show all configurations during generation.gb - Generate pattern basis from patterns being generated |
| -f\[p,u] | Fit weights of pattern configurations.p - Force to use probabilistic weight fitting algorithm.u - Force to use previous parameters if exist |
| -l | List stats on test data |
| -s | List sorted stats on test data |
| -w | List pattern configuration weights |
| -b\[f] | Build evaluation function.f - Save parameters in float (default is double) |
| -v | Validate evaluation function |
| -a | Append log file |
| -h, -?, -i | Help |
