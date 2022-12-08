# Codestyle

----

Every opinion on code style is valid. Mine is not only valid, but also right.

---

Hehe, I'm joking. Please don't hate me :<

In short, you're free to write your code however you are able to. But there are some guidelines for people to not hate you:

1. Use local functions *very* sparingly. Local functions are not patchable and represent a major pain in the ass for future maintenance without good benefits. No-no-no, don't start this But Man Locals Give A Performance Boost talk, the difference is marginal and there is no real reason to depend on it.

1. Try to make your functions as understandable as possible - someone will read it. You will, probably, and you will hate yourself in a week after writing bad code. And the whole community will meme on you, so... Don't. Make your variable names give context, make your functions small enough they remain readable and patchable. Feel free to ask in discord, I will slam dunk on your code any day of the week.

1. Try to use monkey patching and callbacks instead of rewriting the main game files. It is possible 90% of time, and addon users will be living their best lives without addon conflicts. Cool? Cool.

That's it. Feel free to be a good boy/girl and write your code so that we'll understand. Good boy. Or girl.
