# Callbacks

___

You could've been spending time with a girl instead.

___

Callbacks are cool! We use them all over the place!

I even built my own callback system on top of existing one in WTF so you can listen to a callback while listening to a callback.

Whew, perfection.

Callbacks are the main way of communication between the game and your code. The idea is: you want to call your function when something happens in a game, so you subscribe to a callback of this "something" with your function. 

In the last chapter you've seen two callbacks:

1. `actor_on_first_update`, which is called once after game load
2. `on_key_press`, which is called every time a player presses a key (xD why am I even explaining this)

There are many more, located in `axr_main.script`. Interesting ones are:

1. `save_state` and `load_state` callbacks are giving you a table (called `m_data`), which is persisted in a save file. That means you can write there whatever you want in `save_state` and load it back in `load_state`. Convenient to save the amount of soaked underwear the player collected.

2. `actor_on_update` is called *really* frequently (think once a frame, not really but close). Sometimes it's the only way, but most of the times it is not. Use it with *extreme* care or your FPS will drop to -1.

In general, you want to register your callbacks in `on_game_start` using `RegisterScriptCallback(name, func)`. Function `on_game_start` will always be called after loading all scripts, you don't need to think about it.
