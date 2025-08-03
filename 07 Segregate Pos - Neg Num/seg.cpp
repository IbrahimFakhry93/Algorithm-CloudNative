
#include <iostream>
using namespace std;

int segregate(int *arr, int size, int s, int e)
{
    if (s <= e)
        return;
    int m = (s + e) / 2;
    segregate(arr, size, 0, m);
    segregate(arr, size, m + 1, e);

    merge(arr, size, s, m, e);
};

int merge(int *arr, int size, int s, int m, int e)
{
}

int main()
{

    int arr[] = {9, -3, 5, -2, -8, -6, 1, 3};
    int size = sizeof(arr) / sizeof(arr[0]);

    int s = 0;
    int e = size - 1;

    segregate(arr, size, s, e);
}