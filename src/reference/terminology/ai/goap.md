# Goal-Oriented Action Planning

___

## About

[Goal-Oriented Action Planning (GOAP)](https://alumni.media.mit.edu/~jorkin/goap.html) - an AI design technique in which a chain of behaviors of agents (NPCs, abstract entities, "living" obstacles) is automatically selected in real time to satisfy a goal. Thus, more variability of action and unpredictability is added. It is essentially similar to theorem proving methods, but simpler, because of the specifics of its application in games (see AI Game Programming Wisdom 2 for a detailed description).

For GOAP, we need to define a representation of the world in terms of an object. Each property of the world representation must be evaluated by an evaluator. Each object action has a list of preconditions and effects, i.e., what we expect from the action; in addition, each action has its own weight. Based on this information, having the current state of the world and the target state (i.e., the state of the world in which some of its properties have some values), we can construct a sequence of actions of the shortest weight that will move the world from the current state to the target state. An action can occur several times in the constructed sequence. If at given parameters the sequence cannot be constructed, the previous sequence of actions is executed.

### Implementation details

In the GOAP game implementation, the size of the world representation is not limited, since only those properties of the world that are necessary to find the optimal solution are evaluated when constructing the sequence of actions. After the sequence is constructed, only the first action of the sequence will be executed until the goal changes or the current state of the world changes. If the sequence is rebuilt and its first action is not the same as the previous one, the finalize method is called for the previous one and the initialize method for the new one. The execute method is called to perform the action. If with the given parameters the sequence cannot be built, a warning about this is written to the log, along with a dump of the current state of the world (or rather, only those properties of the world that have been evaluated when finding the sequence) and the target one. The action itself may not be atomic. Thus, it is possible to build hierarchical GOAP models
