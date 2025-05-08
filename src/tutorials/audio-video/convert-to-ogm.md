# Convert to *.ogm

___

## About

There is a special format for playing back video in X-Ray. It can be created using [ffmpeg2theora](../../modding-tools/audio-video/ffmpeg2theora.md).

## Convert AVI to OGM

```bash
ffmpeg2theora.exe test.avi -v 10 --noaudio -o test.ogm
```

## Converting Image Sequence to OGM

```bash
ffmpeg2theora.exe frame%06d.png -o test1.ogm
```
