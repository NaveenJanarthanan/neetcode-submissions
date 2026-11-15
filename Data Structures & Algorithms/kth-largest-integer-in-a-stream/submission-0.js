class KthLargest {
    /**
     * @param {number} k
     * @param {number[]} nums
     */
    constructor(k, nums) {
        this.k = k
        this.heap = []
        for(let i = 0; i < nums.length; i++){
            this.add(nums[i])
        }
    }

    /**
     * @param {number} val
     * @return {number}
     */
    add(val) {
        this.heap.push(val)
        let index = this.heap.length - 1

        while(index > 0){
            let parentIndex = Math.floor((index - 1)/2)
            if(this.heap[index] >= this.heap[parentIndex]){
                break
            }

            [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]]
            index = parentIndex



        }
    if (this.heap.length > this.k) {
        this.heap[0] = this.heap.pop();

        let index = 0;

        while (true) {
            let left = 2 * index + 1;
            let right = 2 * index + 2;
            let smallest = index;

            if (
                left < this.heap.length &&
                this.heap[left] < this.heap[smallest]
            ) {
                smallest = left;
            }

            if (
                right < this.heap.length &&
                this.heap[right] < this.heap[smallest]
            ) {
                smallest = right;
            }

            // TODO 1: Stop if the parent is already smallest
            if(smallest === index){
                break;
            }

            [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];

                index = smallest;
        }
    }
    return this.heap[0];
    }
}
