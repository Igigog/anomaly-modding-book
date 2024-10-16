# Motivational Graphs

___

## About

Motivational Graphs is a decision-making method described in AI Game Programming Wisdom 2, which, according to the authors, is something between Decision Trees and Neural Networks.

The essence of the method is that decision-making is based on NPC motivations, including mutually contradictory ones. Let there be several motivations. Each motivation can have sub-motivations. All motivations make up a motivational graph. This graph is oriented and is structurally very similar to a tree. The difference from a tree is that several nodes can have the same children, moreover, several tree roots are possible. The leaves of our graph, i.e. nodes that have no sub-motivations, set goals for NPCs. So the task of MG is to find out WHAT to do, while the task of GOAP is to find out HOW to do it.

So how does MG choose which goal an NPC should fulfill? To do this, we go through all the roots of the graph (i.e. nodes that have no incoming edges), giving them initial weight 1. All other nodes have initial weight 0. Then each root (based on some considerations) distributes its weight to all its submotivations (this may cause "energy" leakage, i.e. the distributed weight may be less in total than the initial weight). We continue this procedure recursively for the children of the root until we get to the leaves of the graph. Each time one of the motivation branches arrives at them, the weight is summed up. Eventually, after the weight propagation procedure is complete, we choose the leaf of the graph that has gained the maximum weight.
