---
title: Introduction
layout: reader
---

# Graphviz Introduction

:::subtitle
Learn how to use graphviz diagrams
:::

## Demo
```dot
digraph G {
	fontname="Helvetica,Arial,sans-serif"
	node [fontname="Helvetica,Arial,sans-serif"]
	edge [fontname="Helvetica,Arial,sans-serif"]

	subgraph cluster_0 {
		style=filled;
		color=lightgrey;
		node [style=filled,color=white];
		a0 -> a1 -> a2 -> a3;
		label = "process #1";
	}

	subgraph cluster_1 {
		node [style=filled];
		b0 -> b1 -> b2 -> b3;
		label = "process #2";
		color=blue
	}
	start -> a0;
	start -> b0;
	a1 -> b3;
	b2 -> a3;
	a3 -> a0;
	a3 -> end;
	b3 -> b4;
    b4 -> end;

	start [shape=Mdiamond];
	end [shape=Msquare];
}
```
## Setup docs.json
```json docs.json [descHead="Tip" desc="Check out how to setup [Graphviz](https://xyd.dev/docs/guides/integrations/abtesting/abtesting-integrations)."]
{
    "integrations": {
        "diagrams": ["graphviz"]
    }
}
```