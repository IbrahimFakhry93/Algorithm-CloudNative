
#include <iostream>
#include <vector>
using namespace std;

void segNeg(int *arr, int size, int s, int m, int e)
{

    //* Left Array:
    int leftArrSize = m - s + 1;
    int *leftArr = new int[leftArrSize];

    for (int i = 0; i < leftArrSize; i++)
    {
        leftArr[i] = arr[s + i];
    }
    //*  Right Array:
    int rightArrSize = e - m;
    int *rightArr = new int[rightArrSize];

    for (int j = 0; j < rightArrSize; j++)
    {
        rightArr[j] = arr[m + 1 + j];
    }

    //*==============
    int i = 0;
    int j = 0;
    int k = s;

    //! Logical Error in following
    //! while (i < leftArrSize)
    // {

    //!     if (leftArr[i] < 0)
    //     {
    //         arr[k] = leftArr[i];
    //!         i++;
    //         k++;
    //     }
    //     else
    //!         i++;
    // }

    // while (j < rightArrSize)
    // {
    //!     if (rightArr[j] < 0)
    //     {
    //         arr[k] = rightArr[j];
    //!         j++;
    //         k++;
    //     }
    //     else
    //!         j++;
    // }

    //*================

    //! My Fix:
    while (i < leftArrSize && leftArr[i] < 0)
    {

        arr[k] = leftArr[i];
        i++;
        k++;
    }

    while (j < rightArrSize && rightArr[j] < 0)
    {

        arr[k] = rightArr[j];
        j++;
        k++;
    }

    while (i < leftArrSize)
    {
        arr[k] = leftArr[i];
        i++;
        k++;
    }
    while (j < rightArrSize)
    {
        arr[k] = rightArr[j];
        j++;
        k++;
    }

    delete[] leftArr;
    delete[] rightArr;
}

void segregate(int *arr, int size, int s, int e)
{
    if (s >= e)
        return;
    int m = (s + e) / 2;
    segregate(arr, size, s, m);
    segregate(arr, size, m + 1, e);

    segNeg(arr, size, s, m, e);
};

int main()
{

    int arr[] = {9, -3, 5, -2, -8, -6, 1, 3};
    int size = sizeof(arr) / sizeof(arr[0]);

    for (int i = 0; i < size; i++)
    {
        cout << arr[i] << " ";
    }

    cout << "\n=======  After Segregatting  =======\n";

    int s = 0;
    int e = size - 1;
    segregate(arr, size, s, e);
    for (int i = 0; i < size; i++)
    {
        cout << arr[i] << " ";
    }
}