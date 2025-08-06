using System;
using System.Collections.Generic;

class Program {
    public static void Main(string[] args) {
        int[] arr = { 9, -3, 5, -2, -8, -6, 1, 3 };

        // 1) Segregate using two lists
        List<int> result = segregate(arr);
        Console.WriteLine("With extra lists: " + String.Join(",", result));
        //? or:
        // 2) Another method Segregate in-place using two-pointer partition
        SegregateInPlace(arr);
        Console.WriteLine("In-place: " + String.Join(",", arr));
    }

    // Original approach: collect negatives then positives into two lists
    public static List<int> segregate(int[] arr) {
        List<int> n = new List<int>();
        List<int> p = new List<int>();

        for (int i = 0; i < arr.Length; i++) {
            if (arr[i] < 0) {
                n.Add(arr[i]);
            } else {
                p.Add(arr[i]);
            }
        }

        foreach (int item in p) {
            n.Add(item);
        }

        return n;
    }

    // Another Approach: in-place partition (O(n) time, O(1) extra space)
    public static void SegregateInPlace(int[] arr) {
        int left = 0, right = arr.Length - 1;
        while (left < right) {
            if (arr[left] < 0) {
                left++;
            }
            else if (arr[right] >= 0) {
                right--;
            }
            else {
                // swap a positive on the left with a negative on the right
                int tmp = arr[left];
                arr[left] = arr[right];
                arr[right] = tmp;
                left++;
                right--;
            }
        }
    }
}
