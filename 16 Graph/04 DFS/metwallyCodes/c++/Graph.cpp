#include "Graph.h"
#include <iostream>
#include <queue>
using namespace std;

// Constructor to create the graph with a list of vertex names
Graph::Graph(vector<string> names)
{
    for (const auto &name : names)
    {
        Vertex *vertex = new Vertex();
        vertex->name = name;
        vertex->visited = false; // initialize!
        vertices.push_back(vertex);
        last_index++;
    }
}

// Method to add edges to a vertex
void Graph::addEdges(int vertexIndex, vector<int> targets)
{
    vertices[vertexIndex]->vertexLinks.reserve(targets.size());
    for (int target : targets)
    {
        vertices[vertexIndex]->vertexLinks.push_back(
            new Edge(vertices[vertexIndex], vertices[target]));
    }
}

// Method to perform a Breadth-First Search (BFS) on the graph
void Graph::BFS()
{
    cout << "BFS From Graph Class;\n";
    if (vertices.empty())
        return;

    queue<Vertex *> q;
    q.push(vertices[0]);
    vertices[0]->visited = true;

    while (!q.empty())
    {
        Vertex *current_vertex = q.front();
        q.pop();
        for (auto *edge : current_vertex->vertexLinks)
        {
            if (!edge->target->visited)
            {
                q.push(edge->target);
                edge->target->visited = true;
                cout << current_vertex->name << " - " << edge->target->name << '\n';
            }
        }
    }

    restoreVertices();
}

// Method to perform a Depth-First Search (DFS) on the graph
void Graph::DFS()
{
    cout << "DFS From Graph Class;\n";
    if (vertices.empty())
        return;
    DFSRecursion(vertices[0]);
    restoreVertices();
}

// Helper method for DFS recursion
void Graph::DFSRecursion(Vertex *current_vertex)
{
    current_vertex->visited = true;
    for (auto *edge : current_vertex->vertexLinks)
    {
        if (!edge->target->visited)
        {
            cout << current_vertex->name << " - " << edge->target->name << '\n';
            DFSRecursion(edge->target);
        }
    }
}

// Helper method to restore all vertices to an unvisited state
void Graph::restoreVertices()
{
    for (auto *vertex : vertices)
    {
        vertex->visited = false;
    }
}
