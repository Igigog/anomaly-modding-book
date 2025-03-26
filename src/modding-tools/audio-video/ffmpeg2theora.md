# ffmpeg2theora

___

## Info

|  |  |
|---|---|
| Program Developer | 2Xipp |
| Described Version | 0.30 |

___

## About

This package provides a command-line tool to encode/recode various video formats (basically everything that ffmpeg can read) into Theora, the free video codec. Run `-h` for help

## Convert AVI to OGM

```bash
ffmpeg2theora.exe test.avi -v 10 --noaudio -o test.ogm
```

### -v 10

Indicates the quality of the final video from 0 to 10. The higher the value, the higher the quality of the final video.

### --noaudio

Disable audio track processing, if any. The final video will be without sound (the X-Ray engine requires the audio track to be a separate [*.ogg](../../reference/file-formats/audio-video/ogg.md) file).

### -o

ffmpeg2theora writes the extension .ogv by default, but our engine requires [*.ogm](../../reference/file-formats/audio-video/ogm.md) - so you can specify the name (and extension) of the final file in advance. This option is optional, you can rename the extension manually.

## Converting Image Sequence to OGM

```bash
ffmpeg2theora.exe frame%06d.png -o test1.ogm
```
